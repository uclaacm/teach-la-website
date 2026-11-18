'use client';

import { useEffect, useState } from "react";
import { fetchEvents } from "@/services/api";
import type { IEvent } from "@/types";
import EventEditor from "./eventEditor";
import styles from "./events.module.css";

const eventDateFormat = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeZone: "UTC",
});

export default function EventsPage() {
    const [events, setEvents] = useState<IEvent[] | null>(null);
    const [loadError, setLoadError] = useState("");
    const [loadAttempt, setLoadAttempt] = useState(0);
    const [editor, setEditor] = useState<{ event?: IEvent } | null>(null);
    const [status, setStatus] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        fetchEvents(controller.signal).then(setEvents).catch((error) => {
            if (!controller.signal.aborted) setLoadError(error.message);
        });
        return () => controller.abort();
    }, [loadAttempt]);

    function openEditor(event?: IEvent) {
        setStatus("");
        setEditor({ event });
    }

    function handleSaved(event: IEvent) {
        setEvents((current) => {
            const events = current ?? [];
            if (events.some(({ _id }) => _id === event._id)) {
                return events.map((item) => item._id === event._id ? event : item);
            }
            return [...events, event];
        });
        setStatus(editor?.event ? "Event updated." : "Event created.");
    }

    return (
        <main className={styles.page}>
            <div className={styles.content}>
                <header className={styles.pageHeader}>
                    <h1>Events</h1>
                    <button
                        className={styles.primaryButton}
                        type="button"
                        disabled={events === null}
                        onClick={() => openEditor()}
                    >
                        Create Event
                    </button>
                </header>

                <p className={styles.status} role="status">{status}</p>
                {events === null && !loadError && <p role="status">Loading events…</p>}
                {loadError && (
                    <div className={styles.loadError}>
                        <p role="alert">{loadError}</p>
                        <button className={styles.button} type="button" onClick={() => {
                            setLoadError("");
                            setLoadAttempt((attempt) => attempt + 1);
                        }}>
                            Retry
                        </button>
                    </div>
                )}
                {events?.length === 0 && <p className={styles.empty}>No events yet.</p>}
                {events && events.length > 0 && (
                    <ul className={styles.eventList}>
                        {events.map((event) => (
                            <li key={event._id} className={styles.event}>
                                <div className={styles.eventDetails}>
                                    <h2>{event.name}</h2>
                                    <div className={styles.metadata}>
                                        <time dateTime={event.date.slice(0, 10)}>
                                            {eventDateFormat.format(new Date(event.date))}
                                        </time>
                                        <span>{event.category}</span>
                                        <span className={event.isPublic ? styles.public : styles.private}>
                                            {event.isPublic ? "Public" : "Private"}
                                        </span>
                                    </div>
                                    <p className={styles.description}>{event.description}</p>
                                </div>
                                <button
                                    className={styles.button}
                                    type="button"
                                    aria-label={`Edit ${event.name}`}
                                    onClick={() => openEditor(event)}
                                >
                                    <span className={styles.pencil} aria-hidden="true">✎</span> Edit
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
                {editor && (
                    <EventEditor
                        event={editor.event}
                        onClose={() => setEditor(null)}
                        onSaved={handleSaved}
                    />
                )}
            </div>
        </main>
    );
}
