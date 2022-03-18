import { Router } from "express";
import {createTable, insertIngrediente, updateIngrediente, selectIngrediente, selectUnicoIngrediente, deleteIngrediente} from './controler/tabelasIngredientes.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode":200,
        "msg": "A API está funcionando"
    })
})

router.get('/ingredientes', selectIngrediente);
router.get('/ingredienteUnico', selectUnicoIngrediente);
router.post('/ingredientes', insertIngrediente);
router.put('/ingredientes', updateIngrediente);
router.delete('/ingredientes', deleteIngrediente);

export default router;