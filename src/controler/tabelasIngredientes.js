import { openDb } from '../configDB.js';

export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Ingredientes (id INTEGER PRIMARY KEY, nome VARCHAR(50), tipo VARCHAR(50), valorKG DECIMAL(10,2) )')
    })
}

export async function selectIngrediente(req, res) {
    openDb().then(db => {
         db.all('SELECT * FROM Ingredientes')
        .then(ingredientes => res.json(ingredientes))
    })
}

export async function selectUnicoIngrediente(req, res) {
    let id = req.body.id;
    openDb().then(db => {
         db.get('SELECT * FROM Ingredientes WHERE id=?', [id])
        .then(ingredienteUnico => res.json(ingredienteUnico));
    })
}

export async function insertIngrediente(req, res) {
    let ingrediente = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Ingredientes (nome, tipo, valorKG) VALUES (?, ?, ?)', [ingrediente.nome, ingrediente.tipo, ingrediente.valorKG])
    })
    res.json({
        "statusCode": 200
    })
}

export async function updateIngrediente(req, res) {
    let ingrediente = req.body;
    openDb().then(db => {
        db.run('UPDATE Ingredientes SET nome=?, tipo=?, valorKG=? WHERE id=?', [ingrediente.nome, ingrediente.tipo, ingrediente.valorKG, ingrediente.id])
    })
    res.json({
        "statusCode": 200
    })
}

export async function deleteIngrediente(req, res) {
    let id = req.body.id;
    openDb().then(db => {
         db.get('DELETE FROM Ingredientes WHERE id=?', [id])
        .then(res => res)
    })
    res.json({
        "statusCode": 200
    })
}