const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const { authenticate } = require('../middleware/auth'); 

router.post('/', authenticate, todoController.createToDo);
router.get('/', authenticate, todoController.getAllToDos);
router.get('/:id', authenticate, todoController.getToDoById);
router.put('/:id', authenticate, todoController.updateToDo);
router.delete('/:id', authenticate, todoController.deleteToDoById);
router.delete('/', authenticate, todoController.deleteAllToDos);

module.exports = router;

