const express = require('express');

//Inicando o projeto 
const server = express();

//criando uma função para a aplicação reconhecer o json
server.use(express.json());

const nomes = ['Codorito Cupuaçu','Manuel da padaria','José do açougue'];

//CRUD

//Método GET = Para retornar um nome apenas
server.get("/nomes/:index", (req, res) => {
    const { index }= req.params;
    return res.json(nomes[index]);
});

//Metodo GET = Para retornar todos os nomes
server.get("/nomes", (req, res) => {
    return res.json(nomes)
});

//Metodo POST = Criar um novo nome
server.post('/nomes', (req, res) => {
    const { name } = req.body;
    nomes.push(name);
    return res.json(nomes)
});

//Metodo PUT = Atualizar o nome
server.put('/nomes/:index', (req,res) => {
    const { index } = req.params;
    const { name } = req.body;
    nomes[index] = name;
    return res.json(nomes);
});

//Metodo Delete = Deletar um nome
server.delete("/nomes/:index", (req, res) => {
    const { index } = req.params;
    nomes.splice(index, 1);
    return res.json({ message: "O nome foi excluido com sucesso!"});
})

//Fazendo a aplicação rodar na porta
server.listen(3000);
