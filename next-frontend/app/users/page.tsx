'use client'; // This opts-in to Client Component behavior so we can use useState

import { useEffect, useState } from 'react';

export default function UsersPage() {
  // State to hold the data from PostgreSQL
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // State to hold the form inputs
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 1. Fetch the data (GET)
  const fetchUsers = async () => {
    try {
      // Nginx intercepts /api/users and forwards it to Express as /users
      const response = await fetch('/api/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  // Run the fetch command exactly once when the page loads
  useEffect(() => {
    fetchUsers();
  }, []);

  // 2. Submit the data (POST)
  const handleCreateUser = async (e: React.FormEvent) => {
    console.log("BUTTON WAS CLICKED");
    e.preventDefault(); // Prevents the browser from refreshing the page
    setLoading(true);

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password }),
      });

      if (response.ok) {
        // Clear the form inputs
        setEmail('');
        setUsername('');
        setPassword('');
        // Refresh the list to show our new user!
        await fetchUsers();
      } else {
        console.error("Failed to create user");
      }
    } catch (error) {
      console.error("Network error:", error);
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>👥 User Management Test</h1>
      <button 
  type="button" 
  onClick={() => alert("REACT IS ALIVE!")}
  style={{ padding: '10px', background: 'red', color: 'white', marginBottom: '20px' }}
>
  PULSE CHECK
</button>
      
      <div style={{ display: 'flex', gap: '40px', marginTop: '30px' }}>
        
        {/* Left Column: The Input Form */}
        <div style={{ flex: 1 }}>
          <h2>Create New User</h2>
          <form onSubmit={handleCreateUser} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
            
            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Username</label>
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              style={{ 
                padding: '12px', 
                background: loading ? '#ccc' : '#0070f3', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontWeight: 'bold'
              }}
            >
              {loading ? 'Adding User...' : 'Add to Database'}
            </button>
          </form>
        </div>

        {/* Right Column: The Database Records */}
        <div style={{ flex: 1 }}>
          <h2>Live Database Records</h2>
          <div style={{ 
            background: '#1e1e1e', 
            color: '#00ff00', 
            padding: '20px', 
            borderRadius: '8px', 
            minHeight: '300px', 
            maxHeight: '500px',
            overflowY: 'auto' 
          }}>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
              {users.length === 0 
                ? "No users found in PostgreSQL." 
                : JSON.stringify(users, null, 2)}
            </pre>
          </div>
        </div>

      </div>
    </div>
  );
}