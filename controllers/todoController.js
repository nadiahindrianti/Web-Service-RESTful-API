const { ToDo } = require('../models'); 

exports.createToDo = async (req, res) => {
    try {
        const { title, description, category, deadline } = req.body;
        const userId = req.user.id; 
        
        const newTodo = await Todo.create({
            title,
            description,
            category,
            deadline,
            userId 
        });

        return res.status(201).json(newTodo);
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong', error });
    }
};

exports.getAllToDos = async (res) => {
    try {
        const todos = await ToDo.findAll();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getToDoById = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await ToDo.findByPk(id);
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
        const todo = await ToDo.findByPk(id);
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
        const todo = await ToDo.findByPk(id);
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
        await ToDo.destroy({ where: {} });
        res.json({ message: 'All ToDos deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
