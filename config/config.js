require('dotenv').config();  

const env = process.env.NODE_ENV || 'development';

const config = {
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'mysql',
    logging: false
  }
};


module.exports = config;

