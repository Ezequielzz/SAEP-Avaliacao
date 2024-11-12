const { Sequelize } = require('sequelize');

const db = new Sequelize('saep', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,  // Removendo logs SQL do console
});

module.exports = db;
