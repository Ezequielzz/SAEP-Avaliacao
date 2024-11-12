const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');

const Tarefa = sequelize.define('Tarefa', {
  id_tarefa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id_usuario'
    },
    allowNull: false
  },
  descricao_tarefa: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nome_setor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prioridade_tarefa: {
    type: DataTypes.ENUM('baixa', 'média', 'alta'),
    allowNull: false
  },
  data_cadastro: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  status_tarefa: {
    type: DataTypes.ENUM('a fazer', 'fazendo', 'pronto'),
    allowNull: false,
    defaultValue: 'a fazer'
  }
});

Tarefa.belongsTo(Usuario, { foreignKey: 'id_usuario' });
module.exports = Tarefa;
