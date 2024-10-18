require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const todoRoutes = require('./routes/todos');
const db = require('./models');  

const app = express();
app.use(bodyParser.json());

console.log('Environment:', process.env.NODE_ENV);
console.log('Database URL:', process.env.DATABASE_URL);

db.sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');

    return db.sequelize.sync();
  })
  .then(() => {
    console.log('Database synced successfully.');

    app.use('/users', userRoutes);
    app.use('/todos', todoRoutes);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
