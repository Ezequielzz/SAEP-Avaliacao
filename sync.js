const sequelize = require('./config/database');
const Usuario = require('./models/usuario');
const Tarefa = require('./models/tarefa');

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Banco de dados sincronizado!');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  } finally {
    process.exit();
  }
})();
