import {openDb} from '../configDB.js';
import {createTable, insertIngrediente, updateIngrediente, selectIngrediente, selectUnicoIngrediente, deleteIngrediente} from '../controler/tabelasIngredientes.js';

import express from 'express';
const ingredientes = express();
ingredientes.use(express.json())

createTable();

ingredientes.get('/', function(req, res) {
    res.send("Teste de conexão")
});

ingredientes.get('/ingredientes', async function(req, res) {
    let ingredientesSelecionados = await selectIngrediente();
    res.json(ingredientesSelecionados);
});

ingredientes.get('/ingredienteUnico', async function(req, res) {
    let ingredienteSelecionado = await selectUnicoIngrediente(req.body.id);
    res.json(ingredienteSelecionado);
});

ingredientes.post('/ingredientes', function(req, res) {
    insertIngrediente(req.body)
    res.json({
        "statusCode": 200
    })
});

ingredientes.put('/ingredientes', function(req, res) {
    if(req.body && !req.body.id) {
        res.json({
            "statusCode": 400,
            "msg": "Informe um Id válido"
        })
    } else {
        updateIngrediente(req.body)
        res.json({
            "statusCode": 200
        })
    }
});

ingredientes.delete('/ingredientes', async function(req, res) {
    let ingredienteSelecionado = await deleteIngrediente(req.body.id);
    res.json(ingredienteSelecionado);
});

ingredientes.listen(3000, () => console.log("Api rodando"))