const express = require('express');
const app = express();
const usuarioRoutes = require('./routes/usuarios');
const tarefaRoutes = require('./routes/tarefas');

app.use(express.json());
app.use('/usuarios', usuarioRoutes);
app.use('/tarefas', tarefaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
