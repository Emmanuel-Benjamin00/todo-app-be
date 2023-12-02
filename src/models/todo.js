import mongoose from './index.js'

const todoSchema = new mongoose.Schema({
    todo: { type: String, required: [true, "Todo is required"] },
    status:{type: Boolean,  required: [true, "Status is required"], default:false },
    createdAt: { type: Date, default: Date.now() }
}, {
    collection: 'todos',
    versionKey: false
})

const todoModel = mongoose.model('todos', todoSchema)
export default todoModel