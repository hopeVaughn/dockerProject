import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load .env variables

const app = express();

// Conditional CORS configuration
const corsOptions = process.env.NODE_ENV === 'production'
  ? { origin: [process.env.FRONTEND_URL], credentials: true }
  : {}; // Allow all origins in development

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Import routes after setting up CORS
import { postsRoutes } from './routes/posts.js';
postsRoutes(app);

app.get('/', (req, res) => {
  res.send('Hello from express!');
});

export { app };
