const crypto = require('crypto'); //pacote q vem junto com o Node, noice, n sabia
//gera uma string aleatoria
const connection = require('../database/connection');

module.exports = {
    async index (request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body; //desestruturando pra evitar que o usuario mande algo q não queremos

        const id = crypto.randomBytes(4).toString('HEX') //4 bytes de caracteres aleatorios, convertido em string do tipo Hexadecimal
        
        await connection('ongs').insert({ //como parametro ele passou a tabela e dps qual metodo ele ia usar (insert)
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id }); //pra ong saber qual o id q ela vai utilizar pra se conectar
    }
};