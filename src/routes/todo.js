import express from "express"
import TodoController from '../controllers/todo.js'
const router = express.Router()


router.post('/create',TodoController.createTodo)
router.get('/get', TodoController.getTodo)



export default router