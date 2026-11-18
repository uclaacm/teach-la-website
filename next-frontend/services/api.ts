import type { EventInput, IClass, IEvent } from "@/types";

export const fetchClasses = async(): Promise<IClass[]> => {
        try {
            const response = await fetch('/api/classes');
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                console.error("Failed to fetch classes");
            }
        } catch (error) {
            console.error("Error:", error);
        }
        return []
    }

async function readEventResponse<T>(response: Response, fallback: string): Promise<T> {
    if (response.ok) return response.json();

    const body = await response.json().catch(() => null);
    throw new Error(typeof body?.error === "string" ? body.error : fallback);
}

export async function fetchEvents(signal?: AbortSignal): Promise<IEvent[]> {
    const response = await fetch("/api/events", { cache: "no-store", signal });
    return readEventResponse<IEvent[]>(response, "Could not load events. Try again.");
}

async function saveEvent(url: string, method: "POST" | "PATCH", fields: Partial<EventInput>) {
    const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
    });
    return readEventResponse<IEvent>(response, "Could not save the event. Try again.");
}

export function createEvent(fields: EventInput) {
    return saveEvent("/api/events", "POST", fields);
}

export function updateEvent(id: string, fields: Partial<EventInput>) {
    return saveEvent(`/api/events/${encodeURIComponent(id)}`, "PATCH", fields);
}
