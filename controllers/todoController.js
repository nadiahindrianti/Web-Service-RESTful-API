const { Todo } = require('../models'); 

exports.createToDo = async (req, res) => {
    const { title, description, category, deadline } = req.body;
    try {
        const todo = await Todo.create({ title, description, category, userId: req.user.id, createdAt: new Date(), deadline });
        res.status(201).json({ message: 'ToDo created', todo });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllToDos = async (req, res) => {
    try {
        const todos = await Todo.findAll({ where: { userId: req.user.id } }); 
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getToDoById = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findOne({ where: { id, userId: req.user.id } }); 
        if (!todo) {
            return res.status(404).json({ message: 'ToDo not found' });
        }
        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.updateToDo = async (req, res) => {
    const { id } = req.params;
    const { title, description, category, deadline } = req.body;
    try {
        const todo = await Todo.findOne({ where: { id, userId: req.user.id } }); 
        if (!todo) {
            return res.status(404).json({ message: 'ToDo not found' });
        }
        await todo.update({ title, description, category, deadline });
        res.json({ message: 'ToDo updated', todo });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteToDoById = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findOne({ where: { id, userId: req.user.id } }); 
        if (!todo) {
            return res.status(404).json({ message: 'ToDo not found' });
        }
        await todo.destroy();
        res.json({ message: 'ToDo deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteAllToDos = async (req, res) => {
    try {
        await Todo.destroy({ where: { userId: req.user.id } }); 
        res.json({ message: 'All ToDos deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
