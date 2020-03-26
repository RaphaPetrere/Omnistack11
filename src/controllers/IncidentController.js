const connection = require('../database/connection');

module.exports = {
    
    async index(request, response) {
        const { page = 1} = request.query; //se a page n existir, ele usa como padrão o valor 1
        
        const [count] = await connection('incidents').count(); //dentro do count tem o contador de casos

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //pra relacionar dados de 2 tabelas
        .limit(5) //limite 5 por paginas
        .offset((page -1) * 5) //na 1° pagina vai mostrar 0-5, na 2° vai mostrar 5-10
        .select([
        'incidents.*', 
        'ongs.name', 
        'ongs.email', 
        'ongs.whatsapp', 
        'ongs.city', 
        'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },
    
    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id  = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        }); //armazenando o 1° valor desse array numa variavel id

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id  = request.headers.authorization;  //pegamos o id pra ver se essa ong é realmente quem postou o incidente

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first(); //retorna só 1 resultado

        if(incident.ong_id != ong_id)
        {
            return response.status(401).json({ error : 'Operation Not Permited.' }) // http status code não autorizado
        }
        
        await connection('incidents').where('id', id).delete();

        return response.status(204).send(); //204 é no content, uma resposta q deu certo mas n tem conteudo
    }
}