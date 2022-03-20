import { metodoSelectIngrediente, metodoSelectUnicoIngrediente, metodoInsertIngrediente, metodoUpdateIngrediente, metodoDeleteIngrediente } from '../DAO/metodos-ingredientes.js';

export async function selectIngrediente(req, res) {
    metodoSelectIngrediente().then((resposta) => {
        res.status(201).json(resposta);
    })
    .catch((e) => {
        res.status(400).json(e);
    });
}

export async function selectUnicoIngrediente(req, res) {
    try {
        let id = req.params.id;
        let response = await metodoSelectUnicoIngrediente(id);
        res.status(200).json(response);
    }
    catch(erro) {
        res.status(400).json(erro.message);
    }
}

export async function insertIngrediente(req, res) {
    try {
        let ingrediente = [
            req.body.id,
            req.body.nome,
            req.body.tipo,
            req.body.valorKG,
            req.body.antigoValorKG
        ];

        let response = await metodoInsertIngrediente(...ingrediente);
        res.status(201).json(response);
    }
    catch(erro) {
        res.status(400).json(erro.message);
    }
}

export async function updateIngrediente(req, res) {
    try {
        let ingrediente = Object.values(req.body);
        let response = metodoUpdateIngrediente(req.params.id, ...ingrediente);
        res.status(200).json(response);
    }
    catch(erro) {
        res.status(400).json(erro.message);
    }
}

export async function deleteIngrediente(req, res) {
    try {
        let id = req.params.id;
        let response = await metodoDeleteIngrediente(id);
        res.status(200).json(response);
    }
    catch(erro) {
        res.status(400).json(erro.message);
    }
}