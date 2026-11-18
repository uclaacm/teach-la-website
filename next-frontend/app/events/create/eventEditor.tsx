import { useEffect, useRef, useState } from "react";
import type { SubmitEvent } from "react";
import { createEvent, updateEvent } from "@/services/api";
import type { EventInput, IEvent } from "@/types";
import styles from "./events.module.css";

interface EventEditorProps {
    event?: IEvent;
    onClose: () => void;
    onSaved: (event: IEvent) => void;
}

function getEventChanges(event: IEvent, fields: EventInput): Partial<EventInput> {
    const original = {
        ...event,
        date: event.date.slice(0, 10),
        eventPagePath: event.eventPagePath?.trim() || null,
    };
    const keys = Object.keys(fields) as (keyof EventInput)[];
    return Object.fromEntries(keys.filter((key) => {
        if (key === "tags") {
            return JSON.stringify(fields.tags) !== JSON.stringify(original.tags.filter(tag => tag.trim()));
        }
        return fields[key] !== original[key];
    }).map((key) => [key, fields[key]]));
}

export default function EventEditor({ event, onClose, onSaved }: EventEditorProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [tags, setTags] = useState(() => {
        const values = event?.tags.length ? event.tags : [""];
        return values.map((value, id) => ({ id, value }));
    });
    const nextTagId = useRef(tags.length);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog && !dialog.open) dialog.showModal();
    }, []);

    async function handleSubmit(submission: SubmitEvent<HTMLFormElement>) {
        submission.preventDefault();
        if (isSaving) return;

        const formData = new FormData(submission.currentTarget);
        const fields: EventInput = {
            name: String(formData.get("name") ?? ""),
            category: String(formData.get("category") ?? ""),
            description: String(formData.get("description") ?? ""),
            tags: formData.getAll("tags").map(String).filter(tag => tag.trim()),
            imagePath: String(formData.get("imagePath") ?? ""),
            altText: String(formData.get("altText") ?? ""),
            date: String(formData.get("date") ?? ""),
            isPublic: formData.has("isPublic"),
            eventPagePath: String(formData.get("eventPagePath") ?? "").trim() || null,
        };

        const changes = event ? getEventChanges(event, fields) : fields;
        if (Object.keys(changes).length === 0) {
            dialogRef.current?.close();
            return;
        }

        setIsSaving(true);
        setError("");
        try {
            const saved = event ? await updateEvent(event._id, changes) : await createEvent(fields);
            onSaved(saved);
            dialogRef.current?.close();
        } catch (error) {
            setError(error instanceof Error ? error.message : "Could not save the event. Try again.");
        } finally {
            setIsSaving(false);
        }
    }

    function addTag() {
        const id = nextTagId.current++;
        setTags((current) => [...current, { id, value: "" }]);
    }

    return (
        <dialog
            ref={dialogRef}
            className={styles.dialog}
            aria-labelledby="event-editor-title"
            onClose={onClose}
            onCancel={(dismissal) => {
                if (isSaving) dismissal.preventDefault();
            }}
        >
            <form className={styles.form} onSubmit={handleSubmit}>
                <header className={styles.dialogHeader}>
                    <h2 id="event-editor-title">{event ? "Edit Event" : "Create Event"}</h2>
                </header>

                <div className={styles.fieldScroller}>
                    <fieldset className={styles.fields} disabled={isSaving}>
                        <label className={styles.field}>
                            Event name
                            <input name="name" type="text" defaultValue={event?.name} required />
                        </label>
                        <label className={styles.field}>
                            Category
                            <input name="category" type="text" defaultValue={event?.category} required />
                        </label>
                        <label className={`${styles.field} ${styles.fullWidth}`}>
                            Description
                            <textarea name="description" rows={3} defaultValue={event?.description} required />
                        </label>

                        <fieldset className={`${styles.tags} ${styles.fullWidth}`}>
                            <legend>Tags</legend>
                            {tags.map(({ id, value }, index) => (
                                <div key={id} className={styles.tagRow}>
                                    <input name="tags" type="text" defaultValue={value} aria-label={`Tag ${index + 1}`} />
                                    <button
                                        className={styles.button}
                                        type="button"
                                        aria-label={`Remove tag ${index + 1}`}
                                        onClick={() => setTags((current) => current.filter((tag) => tag.id !== id))}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <button className={styles.button} type="button" onClick={addTag}>+ Add tag</button>
                        </fieldset>

                        <label className={styles.field}>
                            Image path
                            <input name="imagePath" type="text" defaultValue={event?.imagePath} required />
                        </label>
                        <label className={styles.field}>
                            Image alt text
                            <input name="altText" type="text" defaultValue={event?.altText} required />
                        </label>
                        <label className={styles.field}>
                            Date
                            <input name="date" type="date" defaultValue={event?.date.slice(0, 10)} required />
                        </label>
                        <label className={styles.visibility}>
                            <input name="isPublic" type="checkbox" defaultChecked={event?.isPublic ?? false} />
                            Make this event public
                        </label>
                        <label className={`${styles.field} ${styles.fullWidth}`}>
                            <span>Event page path <span className={styles.optional}>(optional)</span></span>
                            <input name="eventPagePath" type="text" defaultValue={event?.eventPagePath} />
                        </label>
                    </fieldset>
                </div>

                <footer className={styles.dialogFooter}>
                    {error && <p className={styles.saveError} role="alert">{error}</p>}
                    <div className={styles.actions}>
                        <button
                            className={styles.button}
                            type="button"
                            disabled={isSaving}
                            onClick={() => dialogRef.current?.close()}
                        >
                            Cancel
                        </button>
                        <button className={styles.primaryButton} type="submit" disabled={isSaving}>
                            {isSaving ? "Saving…" : event ? "Save Changes" : "Create Event"}
                        </button>
                    </div>
                </footer>
            </form>
        </dialog>
    );
}
