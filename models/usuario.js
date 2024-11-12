const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome_usuario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email_usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Usuario;
