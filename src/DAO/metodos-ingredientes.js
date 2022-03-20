import { openDb } from '../model/configDB.js';
const db = await openDb();

export async function metodoCreateTable() {
    await db.exec('CREATE TABLE IF NOT EXISTS Ingredientes (id INTEGER PRIMARY KEY, nome VARCHAR(50), tipo VARCHAR(50), valorKG DECIMAL(10,2), antigoValorKG DECIMAL(10,2) )');
}
metodoCreateTable()

export async function metodoSelectIngrediente() {
    return await db.all('SELECT * FROM Ingredientes');
}

export async function metodoSelectUnicoIngrediente(id) {
    return await db.get(`SELECT * FROM Ingredientes WHERE id=?`, id);
}

export async function metodoInsertIngrediente(id, nome, tipo, valorKG, antigoValorKG) {
    return await db.run(`INSERT INTO Ingredientes (id, nome, tipo, valorKG, antigoValorKG) VALUES (?, ?, ?, ?, ?)`, [id, nome, tipo, valorKG, antigoValorKG]);
}

export async function metodoUpdateIngrediente(id, nome, tipo, valorKG, antigoValorKG) {
    return await db.run('UPDATE Ingredientes SET nome=?, tipo=?, valorKG=?, antigoValorKG=? WHERE id=?', [nome, tipo, valorKG, antigoValorKG, id]);
}

export async function metodoDeleteIngrediente(id) {
   return await db.get(`DELETE FROM Ingredientes WHERE id=?`,[id]);
}