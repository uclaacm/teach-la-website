import type { Request, Response } from "express";
import mongoose from 'mongoose';
import { TeachEvent } from "../models/TeachEvent.js";

const requiredTextFields = ["name", "category", "description", "imagePath", "altText"] as const;
type EventFields = Partial<Record<(typeof requiredTextFields)[number], string>> & {
    tags?: string[];
    date?: string | number;
    isPublic?: boolean;
    eventPagePath?: string | null;
};

class EventInputError extends Error {}

function readEventFields(body: unknown, partial: boolean): EventFields {
    if (!body || typeof body !== "object" || Array.isArray(body)) {
        throw new EventInputError("Enter event details before saving.");
    }

    const input = body as Record<string, unknown>;
    const fields: EventFields = {};
    for (const field of requiredTextFields) {
        if (partial && !Object.hasOwn(input, field)) continue;
        const value = input[field];
        if (typeof value !== "string" || !value.trim()) {
            throw new EventInputError(`${field} must be a non-empty string.`);
        }
        fields[field] = value;
    }

    const { tags, date, isPublic, eventPagePath } = input;
    if (Object.hasOwn(input, "tags")) {
        if (!Array.isArray(tags) || tags.some(tag => typeof tag !== "string")) {
            throw new EventInputError("Tags must be a list of strings.");
        }
        fields.tags = tags;
    }
    if (!partial || Object.hasOwn(input, "date")) {
        if (typeof date !== "string" && typeof date !== "number") {
            throw new EventInputError("Enter a valid event date.");
        }
        if (typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date)
            && new Date(date).toJSON()?.slice(0, 10) !== date) {
            throw new EventInputError("Enter a valid calendar date.");
        }
        fields.date = date;
    }
    if (!partial || Object.hasOwn(input, "isPublic")) {
        if (typeof isPublic !== "boolean") {
            throw new EventInputError("Public visibility must be true or false.");
        }
        fields.isPublic = isPublic;
    }
    if (Object.hasOwn(input, "eventPagePath")) {
        if (eventPagePath !== null && typeof eventPagePath !== "string") {
            throw new EventInputError("Event page path must be a string or empty.");
        }
        fields.eventPagePath = eventPagePath?.trim() ? eventPagePath : null;
    }
    if (partial && Object.keys(fields).length === 0) {
        throw new EventInputError("Include at least one event field to update.");
    }

    return fields;
}

function sendSaveError(response: Response, error: unknown) {
    if (error instanceof EventInputError || error instanceof mongoose.Error.ValidationError
        || error instanceof mongoose.Error.CastError) {
        return response.status(400).json({ error: error.message });
    }
    if (error instanceof mongoose.mongo.MongoServerError && error.code === 11000) {
        return response.status(409).json({ error: "An event with this name already exists." });
    }
    console.error("Failed to save event", error);
    return response.status(500).json({ error: "Could not save the event. Try again." });
}

export async function getEvents(_request: Request, response: Response) {
    try {
        const events = await TeachEvent.find({});
        response.json(events);
    } catch (error) {
        console.error("Failed to load events", error);
        response.status(500).json({ error: "Could not load events. Try again." });
    }
}

export async function createEvent(request: Request, response: Response) {
    try {
        const { eventPagePath, ...fields } = readEventFields(request.body, false);
        const newEvent = await TeachEvent.create({ ...fields, eventPagePath: eventPagePath ?? undefined });
        response.status(201).json(newEvent);
    } catch (error) {
        sendSaveError(response, error);
    }
}

export async function updateEvent(request: Request<{ id: string }>, response: Response) {
    const { id } = request.params;
    if (!mongoose.isObjectIdOrHexString(id)) {
        return response.status(400).json({ error: "Invalid event ID." });
    }

    try {
        const fields = readEventFields(request.body, true);
        const clearPagePath = fields.eventPagePath === null;
        if (clearPagePath) delete fields.eventPagePath;
        const update = clearPagePath
            ? { $set: fields, $unset: { eventPagePath: 1 } }
            : { $set: fields };
        const event = await TeachEvent.findByIdAndUpdate(id, update, {
            returnDocument: "after",
            runValidators: true,
        });
        if (!event) return response.status(404).json({ error: "This event could not be found." });
        response.json(event);
    } catch (error) {
        sendSaveError(response, error);
    }
}
