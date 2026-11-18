'use client'

import CalendarDay from "@/components/calendarDay";
import { fetchClasses, fetchEvents } from "@/services/api";
import { IClass, IEvent } from "@/types";
import { useEffect, useState } from "react";

export default function CalendarPage() {
    const [classes, setClasses] = useState<IClass[]>([]);
    const [events, setEvents] = useState<IEvent[]>([]);

    const [currentMonth, setCurrentMonth] = useState<number>((new Date().getMonth()));
    const [currentYear, setCurrentYear] = useState<number>((new Date).getFullYear());


    // we want to first get all of the events and classes
    // We can later filter by dates to only get the ones for this month, 
    // but for now we'll just get all of them
    // we can add the filter on the backend

    useEffect(() => {
        const loadClasses = async () => {
            const data = await fetchClasses();

            if(data) setClasses(data);
        }
        loadClasses();
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        fetchEvents(controller.signal).then(setEvents).catch((error) => {
            if (!controller.signal.aborted) console.error(error);
        });
        return () => controller.abort();
    }, []);


    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  // Find out what day of the week (0-6, Sun-Sat) the 1st of the month falls on
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Create an array for the empty padding boxes at the start of the first week
  const paddingDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);
  
  // Create an array of the actual days (1, 2, 3... up to daysInMonth)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // 5. Month Navigation Handlers
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  // Format the header (e.g., "October 2026")
  const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* --- CALENDAR HEADER --- */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <button onClick={handlePrevMonth} style={styles.navButton}>← Previous</button>
        <h1 style={{ margin: 0 }}>{monthName} {currentYear}</h1>
        <button onClick={handleNextMonth} style={styles.navButton}>Next →</button>
      </div>

      {/* --- DAYS OF THE WEEK --- */}
      <div style={styles.gridContainer}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(dayName => (
          <div key={dayName} style={styles.dayOfWeekBox}>
            {dayName}
          </div>
        ))}

        {/* --- PADDING DAYS (Empty cells before the 1st of the month) --- */}
        {paddingDays.map((index) => (
          <div key={`padding-${index}`} style={styles.paddingBox}></div>
        ))}

        {/* --- ACTUAL MONTH DAYS --- */}
        {days.map((day) => (
          <CalendarDay 
            key={`day-${day}`}
            day={day} 
            month={currentMonth} 
            year={currentYear} 
            classes={classes} 
            events={events} 
          />
        ))}
      </div>
      
    </div>
  );
}

// Inline styles for the grid (Move these to global.css or use Tailwind if preferred)
const styles = {
  navButton: {
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)', // 7 equal columns
    gap: '8px', // Space between boxes
  },
  dayOfWeekBox: {
    textAlign: 'center' as const,
    fontWeight: 'bold',
    paddingBottom: '0.5rem',
  },
  paddingBox: {
    backgroundColor: '#f9f9f9',
    border: '1px solid #eaeaea',
    borderRadius: '4px',
    minHeight: '120px',
  }
};

