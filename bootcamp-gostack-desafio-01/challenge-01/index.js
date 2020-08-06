const express = require('express');
const server = express();

server.use(express.json());

const projects = [
    {
        "id": "1",
        "title": "Novo projeto",
        "tasks": []
    }
];
let log_req = 0;
// Crie um middleware global chamado em todas requisições que imprime 
// (console.log) uma contagem de quantas requisições foram feitas 
// na aplicação até então;
server.use((req, res, next) => {
    log_req++;
    req.log_req = log_req;
    console.log(req.log_req);
    next();
  });

server.post('/projects', (req, res) => {
    projects.push(req.body);
    return res.json(projects);
});

// GET /projects: Rota que lista todos projetos e suas tarefas;
server.get('/projects', (req, res) => {
    return res.json(projects);
});

//PUT /projects/:id: A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;
server.put('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const project = projects.find(item => item.id === id);
    project.title = title;
    return res.json(project);
});

// DELETE /projects/:id: A rota deve deletar o projeto com o id presente nos parâmetros da rota;
server.delete('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params;
    const project = projects.findIndex(item => item.id === id);
    projects.splice(project, 1);
    return res.json(projects);
});

// POST /projects/:id/tasks: 
// A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto 
// específico escolhido através do id presente nos parâmetros da rota;
server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
    const { id } = req.params;
    const project = projects.find(item => item.id === id);
    (project.tasks).push(req.body.title);
    return res.json(projects);
});

server.listen(3000, () => {
    console.log("O servidor está rodando!");
});

// Crie um middleware que será utilizado em todas rotas que recebem
// o ID do projeto nos parâmetros da URL que verifica se o projeto 
// com aquele ID existe. Se não existir retorne um erro, 
// caso contrário permita a requisição continuar normalmente;
function checkProjectExists(req, res, next) {
    const { id } = req.params;
    const project = projects.find(item => item.id === id);
    if (!project){
      return res.status(400).json({ error: "Project not exists."});
    }
    return next();
}
