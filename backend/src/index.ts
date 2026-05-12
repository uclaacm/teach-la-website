import express from 'express';
// CRITICAL: Remember the .js extension for local file imports in NodeNext!
import userRoutes from './routes/user.js'; 

const app = express();

// Middleware: Tells Express to automatically parse incoming JSON payloads
app.use(express.json());

// --- Route Mounting ---
// When a request comes in starting with /users, hand it off to userRoutes
app.use('/users', userRoutes);

// You can easily mount future routes here:
// import postRoutes from './routes/postRoutes.js';
// app.use('/posts', postRoutes);

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});