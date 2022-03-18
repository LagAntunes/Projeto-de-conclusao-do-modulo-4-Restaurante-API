import { openDb } from '../configDB.js';

export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Ingredientes (id INTEGER PRIMARY KEY, nome VARCHAR(50), tipo VARCHAR(50), valorKG DECIMAL(10,2) )')
    })
}