require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const todoRoutes = require('./routes/todos');

const app = express();
app.use(bodyParser.json());


app.use('/users', userRoutes);
app.use('/todos', todoRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
