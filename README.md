# Mini Sistema de Matérias com IA (Groq)

> **Observação importante:**
> Sempre que houver qualquer alteração relevante no código (principalmente criação, remoção ou renomeação de arquivos, mudanças de fluxo, endpoints, integrações, etc.), atualize este README imediatamente. Mantenha o contexto, o mapa de arquivos e a descrição do funcionamento do projeto sempre fiéis ao estado atual do sistema. Isso garante que qualquer pessoa (ou IA) possa entender perfeitamente tudo o que foi feito até o momento, facilitando a continuidade do desenvolvimento.

## Contexto Geral
Este projeto é um mini sistema web para geração automática de matérias jornalísticas utilizando inteligência artificial (Groq API). O usuário pode criar uma matéria fictícia com um clique e visualizar o conteúdo gerado em uma página dedicada. O backend é feito em Node.js/Express, e o frontend é HTML/CSS/JS puro.

## Mapa de Arquivos do Projeto

```
mini-sistema-materias/
├── public/
│   ├── index.html         # Página principal com botão para criar matéria
│   ├── materia.html       # Página que exibe a matéria gerada
│   └── styles.css         # Estilo visual do sistema
├── src/
│   ├── app.js             # Ponto de entrada da aplicação (servidor Express)
│   ├── api/
│   │   └── groq.js        # Integração com a API Groq (modelo Llama 3.3 70B Versatile)
│   ├── controllers/
│   │   └── materiaController.js # Lógica de criação e exibição das matérias
│   └── utils/
│       └── storage.js     # Armazenamento em memória das matérias
├── package.json           # Configuração do npm
└── README.md              # Documentação do projeto (este arquivo)
```

## Fluxo do Sistema
1. Usuário acessa `/` e clica em "Criar Matéria com IA"
2. Frontend faz POST para `/api/materia`
3. Backend chama Groq, salva matéria em memória e retorna JSON com ID
4. Frontend redireciona para `materia.html?id=ID`
5. `materia.html` faz GET para `/api/materia/:id` e exibe a matéria

## Sugestões para Próximos Passos
- **Persistência**: Salvar matérias em arquivo ou banco de dados (SQLite, MongoDB, etc.)
- **Listagem de matérias**: Página para listar todas as matérias já geradas
- **Edição/Exclusão**: Permitir editar ou excluir matérias
- **Autenticação**: Adicionar login para uso restrito
- **Customização do prompt**: Permitir ao usuário escolher tema/assunto da matéria
- **Internacionalização**: Suporte a outros idiomas
- **Deploy**: Publicar o sistema em um serviço cloud (Vercel, Heroku, etc.)
- **Testes automatizados**: Adicionar testes para backend e frontend

# Plano mental até agora (25/05/2025 - 17:50)

- O sistema já gera matérias com IA e exibe individualmente por ID.
- O próximo passo mais produtivo é criar uma página de listagem de matérias já geradas, para testar o fluxo completo e a experiência do usuário.
- Isso permite validar a integração com a IA, o armazenamento em memória e a navegação entre matérias, facilitando a identificação de melhorias e eventuais bugs.
- Só após validar o fluxo e a usabilidade, será interessante investir em persistência definitiva (arquivo ou banco de dados), pois o formato e as necessidades de dados já estarão claros.
- Resumindo: **primeiro, foco em front-end para listagem e navegação; depois, persistência real.**

---

> **Este README serve como referência rápida para retomar o desenvolvimento, com visão geral, estrutura, contexto atualizado e ideias de evolução.**