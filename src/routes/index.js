import express from "express"
import TodoRoutes from "./todo.js"

const router = express.Router()

router.use('/todo',TodoRoutes)

export default router