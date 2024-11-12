const express = require('express');
const cors = require('cors');  // Para permitir requisições de diferentes origens, se necessário
const db = require('./config/database');  // Conexão com o banco de dados
const usuarioRoutes = require('./routes/usuarios');
const tarefaRoutes = require('./routes/tarefas');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());  // Para interpretar JSON no body das requisições

// Conectar ao banco de dados
db.authenticate()
  .then(() => console.log('Conexão com o banco de dados bem-sucedida'))
  .catch(err => console.error('Erro ao conectar com o banco de dados:', err));

// Rotas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/tarefas', tarefaRoutes);


// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
