const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors()); //na produção vc pode jogar dentro do () o parametro origin
app.use(express.json());
app.use(routes);
//aeeee coroi, vai usar o SQLite q delicinha

/*
    Pode ser instalar o Driver : SELECT * FROM users
    Query Builder : table('users').select('*').where() q é oq utilizaremos
*/



app.listen(3333);
