import express from 'express';
import Task from '../models/tasks.model.js';

const router = express.Router()

// Create a new task
router.post('/new', (req, res) => {
    const task = new Task({
        description: req.body.description
    })

    task.save()
        .then(data => res.status(201).send('Task created'))
        .catch(err => res.status(400).send(err))
})

// Get all tasks
router.get('/', (req, res) => {
    Task.find()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(400).send(err))
})

// Update a task
router.patch('/update/:taskId', (req, res) => {
    Task.updateOne({_id: req.params.taskId}, { $set: { checked: req.body.checked } })
        .then(() => res.status(200).send('Task updated'))
        .catch(err => res.status(400).send(err))
})

//Delete a task
router.delete('/delete/:taskId', (req, res) => {
    Task.deleteOne({_id: req.params.taskId})
        .then(()=> res.status(200).send('Task deleted'))
        .catch(err => res.status(400).send(err))
})


export { router };




