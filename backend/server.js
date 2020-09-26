// Imports
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config.js';
import Task from './models/tasks.model.js';
// import taskRoute from './routes/tasks.js';

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

// Create a new task
app.post('/tasks/new', (req, res) => {
    const task = new Task({
        description: req.body.description
    })

    task.save()
        .then(data => res.json(data))
        .catch(err => res.json({message: err}))
})

// Get all tasks
app.get('/tasks', (req, res) => {
    Task.find()
        .then(data => res.json(data))
        .catch(err => res.json({message: err}))
})

// Update a task
app.patch('/tasks/update/:taskId', (req, res) => {
    Task.updateOne({_id: req.params.taskId}, { $set: { checked: req.body.checked } })
        .then(data => res.json(data))
        .catch(err => res.json({message: err}))
})

//Delete a task
app.delete('/tasks/delete/:taskId', (req, res) => {
    Task.deleteOne({_id: req.params.taskId})
        .then(data => res.json(data))
        .catch(err => res.json({message: err}))
})


// app.post('/tasks', taskRoute);

// Listener
app.listen(port, () => console.log(`Listening on port: ${port}`))

