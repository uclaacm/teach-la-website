import express from 'express';
// CRITICAL: Remember the .js extension for local file imports in NodeNext!
import userRoutes from './routes/user.js'; 
import eventRoutes from './routes/event.js';
import classRoutes from './routes/class.js';
import authRoutes from './routes/auth.js';
import { connectDB } from './db.js';

const app = express();

// Middleware: Tells Express to automatically parse incoming JSON payloads
app.use(express.json());
connectDB()

// --- Route Mounting ---
// Login/register are served at /api/login and /api/register via nginx
app.use('/', authRoutes);
app.use('/users', userRoutes);
app.use('/events', eventRoutes);
app.use('/classes', classRoutes);

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});