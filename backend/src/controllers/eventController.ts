import { Request, Response } from "express";
import prisma from "../prisma.client.js";

type EventInput = {
  title?: unknown;
  description?: unknown;
  category?: unknown;
  tags?: unknown;
  image?: unknown;
  alt?: unknown;
  altText?: unknown;
  link?: unknown;
  permalink?: unknown;
};

type EventData = {
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  altText: string;
  link: string;
};

type EventUpdateData = Partial<EventData>;

function serializeEvent(event: {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  altText: string;
  link: string;
}) {
  return {
    ...event,
    alt: event.altText,
    permalink: event.link,
  };
}

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : undefined;
}

function getTags(value: unknown) {
  if (value === undefined) {
    return undefined;
  }

  if (!Array.isArray(value) || !value.every((tag) => typeof tag === "string")) {
    return undefined;
  }

  return value.map((tag) => tag.trim()).filter(Boolean);
}

function buildEventData(input: EventInput, requireAllFields: true): EventData | null;
function buildEventData(input: EventInput, requireAllFields: false): EventUpdateData | null;
function buildEventData(input: EventInput, requireAllFields: boolean) {
  const title = getString(input.title);
  const description = getString(input.description);
  const category = getString(input.category);
  const tags = getTags(input.tags);
  const image = getString(input.image);
  const altText = getString(input.altText) ?? getString(input.alt);
  const link = getString(input.link) ?? getString(input.permalink);

  if (
    requireAllFields &&
    (!title || !description || !category || !tags || !image || !altText || !link)
  ) {
    return null;
  }

  const eventData = {
    ...(title !== undefined && { title }),
    ...(description !== undefined && { description }),
    ...(category !== undefined && { category }),
    ...(tags !== undefined && { tags }),
    ...(image !== undefined && { image }),
    ...(altText !== undefined && { altText }),
    ...(link !== undefined && { link }),
  };

  return eventData;
}

export async function getEvents(request: Request, response: Response) {
  const events = await prisma.event.findMany({
    orderBy: {
      title: "asc",
    },
  });

  response.json(events.map(serializeEvent));
}

export async function getEventById(request: Request<{ id: string }>, response: Response) {
  const event = await prisma.event.findUnique({
    where: {
      id: request.params.id,
    },
  });

  if (!event) {
    response.status(404).json({ error: "event not found" });
    return;
  }

  response.json(serializeEvent(event));
}

export async function getEventByLink(
  request: Request<object, object, object, { link?: string }>,
  response: Response
) {
  const link = getString(request.query.link);

  if (!link) {
    response.status(400).json({ error: "link query parameter is required" });
    return;
  }

  const event = await prisma.event.findFirst({
    where: {
      link,
    },
  });

  if (!event) {
    response.status(404).json({ error: "event not found" });
    return;
  }

  response.json(serializeEvent(event));
}

export async function createEvent(request: Request, response: Response) {
  const eventData = buildEventData(request.body, true);

  if (!eventData) {
    response.status(400).json({
      error:
        "title, description, category, tags, image, alt/altText, and link/permalink are required",
    });
    return;
  }

  try {
    const event = await prisma.event.create({
      data: eventData,
    });

    response.status(201).json({
      message: "event created",
      event: serializeEvent(event),
    });
  } catch (error) {
    console.log("Failed to create event: ", error);
    response.status(500).json({ error: "failed to create event" });
  }
}

export async function updateEvent(request: Request<{ id: string }>, response: Response) {
  const eventData = buildEventData(request.body, false);

  if (!eventData || Object.keys(eventData).length === 0) {
    response.status(400).json({ error: "at least one valid event field is required" });
    return;
  }

  try {
    const event = await prisma.event.update({
      where: {
        id: request.params.id,
      },
      data: eventData,
    });

    response.json({
      message: "event updated",
      event: serializeEvent(event),
    });
  } catch (error) {
    console.log("Failed to update event: ", error);
    response.status(500).json({ error: "failed to update event" });
  }
}

export async function deleteEvent(request: Request<{ id: string }>, response: Response) {
  try {
    await prisma.event.delete({
      where: {
        id: request.params.id,
      },
    });

    response.status(204).send();
  } catch (error) {
    console.log("Failed to delete event: ", error);
    response.status(500).json({ error: "failed to delete event" });
  }
}
