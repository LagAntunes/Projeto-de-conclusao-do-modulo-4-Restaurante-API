import express from 'express';

const ingredientes = express();
ingredientes.use(express.json());

import Router from './routes.js';

ingredientes.listen(3000, () => console.log("Api rodando"));
Router.ingredientes(ingredientes, "/ingredientes");
