// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createPoubelle(data) {
  const [id] = await knex('poubelles').insert({data});
  return getPoubelleById(id)
}

// Read
async function getAllPoubelles() {
  return await knex.select().from('poubelles');
}

async function getPoubelleById(id) {
  return await knex('poubelles').where({id}).first();
}

// Delete
async function deletePoubelle(id) {
  return await knex('poubelles').where({id}).del();
}

module.exports = {
  create : createPoubelle,
  getAll: getAllPoubelles,
  get: getPoubelleById,
  delete: deletePoubelle,
  routePrefix: 'poubelles'
};


// npm install knex sqlite3