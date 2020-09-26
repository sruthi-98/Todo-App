import express from 'express';
import Task from '../models/tasks.model.js';

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello')
})

router.post('/new', (req, res) => {
    const post = new Task({
        description: req.body.description
    })

    post.save()
        .then(data => res.json(data))
        .catch(err => res.json({message: err}))
})

export default router




