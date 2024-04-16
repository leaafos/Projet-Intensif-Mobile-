// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('knex')(require('./knexfile')['development']);

// Create
async function createPoubelle(poubellesId, usersId, productsId, date) {
  return await knex('boissons').insert({ poubellesId, usersId, productsId, date});
}

// Read
async function getAllPoubelles() {
  return await knex.select().from('poubelles');
}

async function getPoubelleById(poubellesid) {
  return await knex('poubelles').where({ poubellesid }).first();
}

// Delete
async function deletePoubelle(poubellesid) {
  return await knex('poubelles').where({ poubellesid }).del();
}

module.exports = {
  createPoubelle,
  getAllPoubelles,
  getPoubelleById,
  deletePoubelle
};

// npm install knex sqlite3