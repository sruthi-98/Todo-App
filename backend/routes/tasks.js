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
    User.find({_id: req.params.userId})
        .then(data => res.status(200).send(data))
        .catch(err => res.status(400).send(err))
})

// Update a task status
router.patch('/:userId/update/:taskId', (req, res) => {
    User.findOneAndUpdate(
            {todos: {$elemMatch: {_id: req.params.taskId}}},
            {$set: {"todos.$.checked": req.body.checked}}
        )
        .then(() => res.status(200).send('Task updated'))
        .catch(err => res.status(400).send(err))
})

// Update a task description
router.patch('/:userId/update/desc/:taskId', (req, res) => {
    User.findOneAndUpdate(
            {todos: {$elemMatch: {_id: req.params.taskId}}},
            {$set: {"todos.$.description": req.body.description}}
        )
        .then(() => res.status(200).send('Task updated'))
        .catch(err => res.status(400).send(err))
})

//Delete a task
router.delete('/:userId/delete/:taskId', (req, res) => {
    User.updateOne(
            {_id: req.params.userId},
            {$pull: {todos: {_id: req.params.taskId}}}
        )
        .then(() => res.status(200).send('Task deleted'))
        .catch(err => console.log(err))

              
})


export { router };




