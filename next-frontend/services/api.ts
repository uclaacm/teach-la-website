import { IClass, IEvent } from "@/types";

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

export const fetchEvents = async (): Promise<IEvent[]> => {
        try {
            const response = await fetch('/api/events');
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                console.error("Failed to fetch events");
            }
        } catch (error) {
            console.error("Error:", error);
        }
        return []
    }