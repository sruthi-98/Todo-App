import mongoose from 'mongoose';

// Database schema for user
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    lastName: {
        type: String,
        default: "",
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 8
    }
})

export default mongoose.model('users', userSchema);