const express = require('express');
const ingredientes = express();

ingredientes.get('/', function(req, res) {
    res.send("Olá mundo")
})

ingredientes.listen(3000, () => console.log("Api rodando"))