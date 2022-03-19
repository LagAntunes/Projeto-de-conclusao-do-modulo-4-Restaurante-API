import {openDb} from './model/configDB.js';

import express from 'express';
const ingredientes = express();
ingredientes.use(express.json())

import router from './routes.js'
ingredientes.use(router);


ingredientes.listen(3000, () => console.log("Api rodando"))