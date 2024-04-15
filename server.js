const express = require('express');
const app = express();
const mysql = require('mysql2');
const myqsl_config = require('./myqsl_config');
const connection = mysql.createConnection(myqsl_config);
const functions = require('./functions');
const cors = require('cors');

app.listen(3000, () => {

    console.log('Servidor no ar nessa tarde chuvosa');
});

app.use(cors());

app.get('/', (req, res) => {

    connection.query('SELECT * FROM tasks', (err, results) => {

        if(err){

            res.json(functions.response('casa caiu', 'Erro: ' + err.message));
        } else {

            res.json(functions.response('Tamu faceiro', 'Tasks listadas com sucesso', results));
        }
    });
});


