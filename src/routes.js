const express = require('express');
const crypto = require('crypto'); //pacote q vem junto com o Node, noice, n sabia
//gera uma string aleatoria

const routes = express.Router();

routes.post('/ongs', (request, response) => {

    const { name, email, whatsapp, city, uf } = request.body; //desestruturando pra evitar que o usuario mande algo q não queremos

    const id = crypto.randomBytes(4).toString('HEX') //4 bytes de caracteres aleatorios, convertido em string do tipo Hexadecimal
    
    

    return response.json();
});

module.exports = routes;