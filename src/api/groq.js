const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const GROQ_API_KEY = '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';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const MODEL = 'llama-3.3-70b-versatile';

async function getMateria() {
    const prompt = 'Gere uma matéria jornalística fictícia em português, com título e conteúdo, sobre tecnologia. Responda em JSON no formato: { "id": "<id>", "titulo": "<titulo>", "conteudo": "<conteudo>" }';
    try {
        console.log('Enviando requisição para Groq...');
        const response = await axios.post(
            GROQ_API_URL,
            {
                model: MODEL,
                messages: [
                    { role: 'user', content: prompt }
                ]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${GROQ_API_KEY}`
                },
                timeout: 15000 // 15 segundos de timeout
            }
        );
        console.log('Resposta recebida da Groq:', response.data);
        // Extrai o JSON do texto retornado pela IA
        const text = response.data.choices[0].message.content;
        let materia;
        try {
            materia = JSON.parse(text);
        } catch (e) {
            console.warn('Resposta não veio em JSON. Conteúdo bruto:', text);
            materia = {
                id: uuidv4(),
                titulo: 'Matéria gerada',
                conteudo: text
            };
        }
        if (!materia.id) materia.id = uuidv4();
        return materia;
    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            console.error('Timeout ao chamar a API Groq.');
        } else if (error.response) {
            console.error('Erro de resposta da API Groq:', error.response.status, error.response.data);
        } else {
            console.error('Erro ao chamar a API Groq:', error.message);
        }
        throw error;
    }
}

module.exports = { getMateria };