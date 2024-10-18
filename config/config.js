const env = process.env.NODE_ENV || 'development';


console.log('Current environment:', env);
console.log('Database URL (for production):', process.env.DATABASE_URL);

const config = {
  development: {
    username: "root",
    password: "Nadiah271,.",
    database: "todo_db",
    host: "localhost",
    dialect: "mysql",
    port: 3306
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "mysql"
  }
};

module.exports = config;
