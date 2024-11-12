# Documentação Avaliação Prática - SAEP

## Criação da tabela Usuario

```
CREATE TABLE Usuario (
    id_usuario SERIAL PRIMARY KEY,
    nome_usuario VARCHAR(255) NOT NULL,
    email_usuario VARCHAR(255) NOT NULL UNIQUE
);
```

## Criação da tabela Tarefa
```
CREATE TABLE Tarefa (
    id_tarefa SERIAL PRIMARY KEY,
    id_usuario INTEGER NOT NULL,
    descricao_tarefa VARCHAR(255) NOT NULL,
    nome_setor VARCHAR(100) NOT NULL,
    prioridade_tarefa VARCHAR(5) CHECK (prioridade_tarefa IN ('baixa', 'média', 'alta')) NOT NULL,
    data_cadastro DATE NOT NULL DEFAULT CURRENT_DATE,
    status_tarefa VARCHAR(10) CHECK (status_tarefa IN ('a fazer', 'fazendo', 'pronto')) NOT NULL DEFAULT 'a fazer',
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario) ON DELETE CASCADE
);
```

## Diagramas

### Diagrama Entidade Relacionamento

<div align="center">
    <img src="/img/diagrama classe.png">
</div>

### Diagrama de Casos de Uso

<div align="center">
    <img src="/img/diagrama caso de uso.png">
</div>

## Telas

### Home

<div align="center">
    <img src="/img/home.png">
</div>

### Cadastro Usuário

<div align="center">
    <img src="/img/cadastro usuario.png">
</div>

### Cadastro Tarefa

<div align="center">
    <img src="/img/cadastro tarefa.png">
</div>

### Gerenciamento Tarefa

<div align="center">
    <img src="/img/gerenciamento tarefa.png">
</div>