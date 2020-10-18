import mongoose from 'mongoose';

// Database schema for task collection
export const taskSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model('tasks', taskSchema)