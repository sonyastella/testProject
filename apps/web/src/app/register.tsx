import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from './page.module.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('participant');
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    await axios.post('/api/register', { name, email, password, role });
    router.push('/login');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="participant">Participant</option>
        <option value="organizer">Organizer</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
