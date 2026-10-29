'use client';

import { fetchEvents } from '@/services/api';
import { useCallback, useEffect, useState} from 'react';

export default function CalendarPage() {
    const [events, setEvents] = useState<any[]>([]);

    const [name, setName] = useState<string>();
    const [category, setCategory] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [tags, setTags] = useState<string[]>();
    const [imagePath, setImagePath] = useState<string>();
    const [altText, setAltText] = useState<string>();
    const [date, setDate] = useState<string>();
    const [isPublic, setIsPublic] = useState<boolean>(false);

    const clearForm = useCallback(() => {
        setName('');
        setCategory('');
        setDescription('');
        setTags([]);
        setImagePath('');
        setAltText('');
        setDate('');
        setIsPublic(false);
    }, []);


    

    useEffect(() => {
        const loadEvents = async () => {
            const data = await fetchEvents();
            if(data) setEvents(data);
        }
        loadEvents();
    }, [])

    const handleCreateEvent = async (e: React.SubmitEvent) => {
        console.log("BUTTON WAS CLICKED");
        e.preventDefault();

        try {
            const response = await fetch('/api/events', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name, 
                    category, 
                    description, 
                    tags, 
                    imagePath, 
                    altText, 
                    date: (date ? new Date(date): null), 
                    isPublic
                }),
            });
            if (response.ok) {
                clearForm();
                await fetchEvents();
            } else {
                console.error("Failed to create event");
            }
        } catch (error) {
            console.error("Error:  ", error);
        }
    }

    return (
    <div className="events-page-container">
      {/* --- EVENT LIST SECTION --- */}
      <section className="events-list-section">
        <h2>All Events</h2>
        {events.length === 0 ? (
          <p>No events found.</p>
        ) : (
          <ul>
            {events.map((event, index) => (
              // Use event._id if you have it from Mongoose, otherwise fallback to index
              <li key={event._id || index}>
                <h3>{event.name} {event.isPublic && "🌍"}</h3>
                <p><strong>Category:</strong> {event.category}</p>
                <p><strong>Date:</strong> {event.date ? new Date(event.date).toLocaleDateString() : 'TBD'}</p>
                <p>{event.description}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <hr />

      {/* --- CREATE EVENT FORM SECTION --- */}
      <section className="create-event-section">
        <h2>Create New Event</h2>
        
        {}
        <form onSubmit={handleCreateEvent} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px'}}>
          
          <label>
            Event Name:
            <input 
              type="text" 
              value={name || ""} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </label>

          <label>
            Category:
            <input 
              type="text" 
              value={category || ""} 
              onChange={(e) => setCategory(e.target.value)} 
            />
          </label>

          <label>
            Description:
            <textarea 
              value={description || ""} 
              onChange={(e) => setDescription(e.target.value)} 
              rows={4}
            />
          </label>

          <label>
            Tags (comma separated):
            <input 
              type="text" 
              // Join the array for display, split into array on change
              value={tags ? tags.join(", ") : ""} 
              onChange={(e) => setTags(e.target.value.split(",").map(tag => tag.trim()))} 
              placeholder="music, outdoor, free"
            />
          </label>

          <label>
            Image Path / URL:
            <input 
              type="text" 
              value={imagePath || ""} 
              onChange={(e) => setImagePath(e.target.value)} 
            />
          </label>

          <label>
            Image Alt Text:
            <input 
              type="text" 
              value={altText || ""} 
              onChange={(e) => setAltText(e.target.value)} 
            />
          </label>

          <label>
            Date:
            <input 
              type="date" 
              value={date || ""} 
              onChange={(e) => setDate(e.target.value)} 
            />
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input 
              type="checkbox" 
              checked={isPublic} 
              onChange={(e) => setIsPublic(e.target.checked)} 
            />
            Make this event public
          </label>

          <button type="submit">Submit Event</button>
        </form>
      </section>
    </div>
  );
}