import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Event } from '../types';
import styles from './page.module.css';

const DashboardPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios.get<Event[]>('http://localhost:8000/api/samples', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(response => {
      setEvents(response.data);
    });
  }, []);

  const handleEdit = (id: number) => {
    router.push(`/edit-event/${id}`);
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:8000/api/samples/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1>My Events</h1>
      <div className={styles.eventsList}>
        {events.map(event => (
          <div key={event.id} className={styles.eventCard}>
            <h2>{event.name}</h2>
            <button onClick={() => handleEdit(event.id)}>Edit</button>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
