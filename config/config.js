require('dotenv').config();  

const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'Nadiah271,.',  
    database: process.env.MYSQL_DATABASE || 'todo_db',
    host: process.env.MYSQL_HOST || 'localhost',
    dialect: 'mysql',
    port: process.env.MYSQL_PORT || 3306,
    logging: console.log  
  },
  production: {
    use_env_variable: 'DATABASE_URL',  
    dialect: 'mysql',
    logging: false  
  }
};

console.log('MySQL User:', process.env.MYSQL_USER);
console.log('MySQL Host:', process.env.MYSQL_HOST);

module.exports = config;

