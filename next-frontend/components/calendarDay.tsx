import Link from "next/link";
import { ICalendarDayData } from "@/types";

export default function CalendarDay({ day, month, year, classes, events }: ICalendarDayData) {
    const isSameDay = (dateStr: string) => {
        const d = new Date(dateStr);
    return (
      d.getDate() === day &&
      d.getMonth() === month &&
      d.getFullYear() === year
    );
  };

  const todaysClasses = classes.filter((c) =>
    c.dates?.some((dateStr) => isSameDay(dateStr))
  );

  const todaysEvents = events.filter((e) => {
    if (e.date) return isSameDay(e.date);
    return false;
  });


  return (
    <div style={styles.dayBox}>
      <span style={styles.dateNumber}>{day}</span>

      <div style={styles.itemsContainer}>
        {todaysClasses.map((c) => {
          // Use provided path, or fallback to a dynamic route using the ID
          const targetUrl = c.classPagePath || `/classes/${c._id}`;
          
          return (
            <Link key={`class-${c._id}`} href={targetUrl} style={styles.classLink}>
              📚 {c.name}
            </Link>
          );
        })}

        {todaysEvents.map((e) => {
          // Use provided path, or fallback to a dynamic route using the ID
          const targetUrl = e.eventPagePath || `/events/${e._id}`;
          
          return (
            <Link key={`event-${e._id}`} href={targetUrl} style={styles.eventLink}>
              📅 {e.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  dayBox: {
    border: '1px solid #eaeaea',
    borderRadius: '4px',
    minHeight: '120px',
    padding: '8px',
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: '#fff',
  },
  dateNumber: {
    fontWeight: 'bold',
    marginBottom: '8px',
    fontSize: '0.9rem',
    color: '#333',
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px',
  },
  classLink: {
    fontSize: '0.8rem',
    color: '#0070f3',
    textDecoration: 'none',
    backgroundColor: '#e6f2ff',
    padding: '4px',
    borderRadius: '4px',
    display: 'block',
  },
  eventLink: {
    fontSize: '0.8rem',
    color: '#008060',
    textDecoration: 'none',
    backgroundColor: '#e6fffa',
    padding: '4px',
    borderRadius: '4px',
    display: 'block',
  }
};