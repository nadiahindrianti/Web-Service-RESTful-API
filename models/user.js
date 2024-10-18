'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  
  User.associate = function(models) {
    User.hasMany(models.ToDo, {
      foreignKey: 'userId',
      as: 'todos'
    });
  };
  
  return User;
};
