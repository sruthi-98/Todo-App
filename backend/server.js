// Imports
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config.js';
import { router as taskRoute } from './routes/tasks.js';
import { router as authenticationRoute } from './routes/authentication.js';

// App config
const app = express()
const port = process.env.port || 9000

// Middleware
app.use(express.json())
app.use(cors({ credentials: true }))

// Database config
mongoose.connect(process.env.CONNECTION_URL, {
                    useCreateIndex: true,
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })
        .catch(err => console.log(err.reason))

const db = mongoose.connection
db.on('error', () => console.log("Connection error"))
db.once('open', () => console.log("Database connection established successfully"))

// Routes
app.use('/tasks', taskRoute);
app.use('/user', authenticationRoute);

// Listener
app.listen(port, () => console.log(`Listening on port: ${port}`))

