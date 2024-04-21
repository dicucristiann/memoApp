import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();
dotenv.config();

// Middleware for CORS
app.use(cors());

// Middleware for body parsing must be placed before route handlers
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// Middleware for Cross-Origin-Opener-Policy
// Note: Consider the necessity and implications of this for security
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
  next();
});

// Routes
app.use('/posts', postRoutes);
app.use('/user', userRouter);

// Specific route to test COOP settings
app.get('/some-specific-route', (req, res) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
  res.send('This is a specific route without COOP.');
});

// Main route for the application
app.get('/', (req, res) => {
  res.send('Hello. Server is on!');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);