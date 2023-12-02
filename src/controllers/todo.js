import todoModel from "../models/todo.js";

const createTodo = async (req, res) => {
    try {
        const { todo } = req.body
        if (todo) {
            await todoModel.create(req.body)
            res.status(201).send({
                message: "Todo created Successfully",
                todo
            })
        }
        else {
            res.status(400).send({
                message: "Todo is required"
            })
        }
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const getTodo = async (req, res) => {
    try {
        let todos = await todoModel.find({}).sort({ createdAt: 1 })
        res.status(200).send({
            message: "Todos Fetched Successfully",
            todos
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error.message
        })
    }
}


export default {
    createTodo,
    getTodo
}