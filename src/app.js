const express = require('express');
const path = require('path');
const MateriaController = require('./controllers/materiaController');

const app = express();
const PORT = process.env.PORT || 3333;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Middleware para analisar JSON
app.use(express.json());

// Instância do controlador de matérias
const materiaController = new MateriaController();

// Rota para criar matéria (POST)
app.post('/api/materia', async (req, res) => {
    try {
        const materia = await materiaController.criarMateria();
        res.json(materia);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar matéria' });
    }
});

// Rota para exibir matéria por id (GET)
app.get('/api/materia/:id', (req, res) => {
    const id = req.params.id;
    try {
        const materia = materiaController.exibirMateria(id);
        res.json(materia);
    } catch (error) {
        res.status(404).json({ error: 'Matéria não encontrada' });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});