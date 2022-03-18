import { openDb } from '../configDB.js';

export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Ingredientes (id INTEGER PRIMARY KEY, nome VARCHAR(50), tipo VARCHAR(50), valorKG DECIMAL(10,2) )')
    })
}

export async function insertIngrediente(ingrediente) {
    openDb().then(db => {
        db.run('INSERT INTO Ingredientes (nome, tipo, valorKG) VALUES (?, ?, ?)', [ingrediente.nome, ingrediente.tipo, ingrediente.valorKG])
    })
}

export async function updateIngrediente(ingrediente) {
    openDb().then(db => {
        db.run('UPDATE Ingredientes SET nome=?, tipo=?, valorKG=? WHERE id=?', [ingrediente.nome, ingrediente.tipo, ingrediente.valorKG, ingrediente.id])
    })
}

export async function selectIngrediente() {
    openDb().then(db => {
        return db.all('SELECT * FROM ingrediente')
        .then(res => res)
    })
}

export async function selectUnicoIngrediente(id) {
    openDb().then(db => {
        return db.get('SELECT * FROM ingrediente WHERE id=?', [id])
        .then(res => res)
    })
}

export async function deleteIngrediente(id) {
    openDb().then(db => {
        return db.get('DELETE FROM ingrediente WHERE id=?', [id])
        .then(res => res)
    })
}