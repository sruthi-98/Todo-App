import express from 'express';
import Task from '../models/tasks.model.js';
import User from '../models/users.model.js';

const router = express.Router()

// Create a new tasks
router.patch('/:userId/new', (req, res) => {
    const task = new Task({
        description: req.body.description
    })

    User.updateOne({_id: req.params.userId}, { $push: { todos: task } })
        .then(data => res.status(201).send(data))
        .catch(err => res.status(400).send(err))
})

// Get all tasks
router.get('/:userId', (req, res) => {
    User.find({ }, { todos: 1, _id: 0 })
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




