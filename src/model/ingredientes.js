import {openDb} from '../configDB.js';
import {createTable} from '../controler/tabelasIngredientes.js';

import express from 'express';
const ingredientes = express();
ingredientes.use(express.json())

createTable();

ingredientes.get('/', function(req, res) {
    res.send("Teste de conexão")
});

ingredientes.post('/ingredientes', function(req, res) {
    console.log(req.body)
    res.json({
        "statusCode": 200
    })
});

ingredientes.listen(3000, () => console.log("Api rodando"))