// Armazenamento em memória
const materias = {};

function salvarMateria(id, materia) {
    materias[id] = materia;
}

function carregarMateria(id) {
    return materias[id] || null;
}

module.exports = { salvarMateria, carregarMateria };