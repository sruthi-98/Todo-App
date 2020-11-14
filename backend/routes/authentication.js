import express from 'express';
import bcrypt from 'bcryptjs';
import { registerValidation, loginValidation } from './validation.js';
import User from '../models/users.model.js';

const router = express.Router()

// Register a new user 
router.post('/register', async (req, res) => {

    // Validate data before creating a user
    const { error } = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // Check if the user has an account
    const emailExist = await User.findOne({ email: req.body.email })
    if (emailExist) return res.status(400).send('E-mail already exist. Try logging in.')

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    
    // Create a new user
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
    })

    user.save()
        .then(data => res.status(201).send(data))
        .catch(err => res.status(400).send(err))
})

// Login 
router.post('/login', async (req, res) => {

    // Validate data before logging in
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // Check if the user does not have an account
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send('Wrong e-mail or password.')

    // Checking if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).send('Wrong e-mail or password.')

    res.status(200).send({
        user: {
            id: user._id,
            name: user.firstName
        },
        message: 'Logged In'
    })
})

export { router };