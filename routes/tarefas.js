const express = require('express');
const router = express.Router();
const Tarefa = require('../models/tarefa');

// Criar uma nova tarefa
router.post('/', async (req, res) => {
  try {
    const { id_usuario, descricao_tarefa, nome_setor, prioridade_tarefa } = req.body;
    const tarefa = await Tarefa.create({
      id_usuario,
      descricao_tarefa,
      nome_setor,
      prioridade_tarefa,
      data_cadastro: new Date(),
      status_tarefa: 'a fazer',
    });
    res.status(201).json(tarefa);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao cadastrar tarefa', details: error.message });
  }
});

// Listar todas as tarefas
router.get('/', async (req, res) => {
  try {
    const tarefas = await Tarefa.findAll();
    res.status(200).json(tarefas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar tarefas', details: error.message });
  }
});

// Obter uma tarefa específica por ID
router.get('/:id', async (req, res) => {
  try {
    const tarefa = await Tarefa.findByPk(req.params.id);
    if (tarefa) {
      res.status(200).json(tarefa);
    } else {
      res.status(404).json({ error: 'Tarefa não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tarefa', details: error.message });
  }
});

// Atualizar uma tarefa
router.put('/:id', async (req, res) => {
  try {
    const { descricao_tarefa, nome_setor, prioridade_tarefa, status_tarefa } = req.body;
    const tarefa = await Tarefa.findByPk(req.params.id);
    if (tarefa) {
      tarefa.descricao_tarefa = descricao_tarefa;
      tarefa.nome_setor = nome_setor;
      tarefa.prioridade_tarefa = prioridade_tarefa;
      tarefa.status_tarefa = status_tarefa;
      await tarefa.save();
      res.status(200).json(tarefa);
    } else {
      res.status(404).json({ error: 'Tarefa não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar tarefa', details: error.message });
  }
});

// Excluir uma tarefa
router.delete('/:id', async (req, res) => {
  try {
    const tarefa = await Tarefa.findByPk(req.params.id);
    if (tarefa) {
      await tarefa.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Tarefa não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir tarefa', details: error.message });
  }
});

module.exports = router;
