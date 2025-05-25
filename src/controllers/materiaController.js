const groqApi = require('../api/groq');
const storage = require('../utils/storage');

class MateriaController {
    async criarMateria() {
        try {
            const materiaData = await groqApi.getMateria();
            storage.salvarMateria(materiaData.id, materiaData);
            return materiaData;
        } catch (error) {
            console.error("Erro ao criar matéria:", error);
            throw error;
        }
    }

    exibirMateria(id) {
        const materia = storage.carregarMateria(id);
        if (materia) {
            return materia;
        } else {
            throw new Error("Matéria não encontrada");
        }
    }
}

module.exports = MateriaController;