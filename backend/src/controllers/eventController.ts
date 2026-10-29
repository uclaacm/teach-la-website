import { Request, Response } from "express";
import mongoose from 'mongoose';
import { TeachEvent } from "../models/TeachEvent";


export async function getEvents(request: Request, response: Response)
{
    try {
        const events = await TeachEvent.find({});
        response.json(events);
    } catch (error) {
        response.status(500).json(error);
    }
}

export async function createEvent(request: Request, response: Response) {
    try {
        const { name, category, description, tags, imagePath, altText, date, isPublic, eventPagePath} = request.body;
        const newEvent = await TeachEvent.create({ name, category, description, tags, imagePath, altText, date, isPublic, eventPagePath});
        response.status(201).json(newEvent);
    } catch (error) {
        response.status(500).json(error);
    }
}