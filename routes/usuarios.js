const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

// Rota para cadastrar um novo usuário
router.post('/', async (req, res) => {
  try {
    const { nome_usuario, email_usuario } = req.body;
    const usuario = await Usuario.create({ nome_usuario, email_usuario });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao cadastrar usuário' });
  }
});

// Listar todas as tarefas
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar usuarios', details: error.message });
  }
});

module.exports = router;
