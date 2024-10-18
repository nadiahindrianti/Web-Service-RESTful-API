const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
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

console.log('Current environment:', env);
console.log('Database URL (for production):', process.env.DATABASE_URL || 'Not set');

module.exports = config;
