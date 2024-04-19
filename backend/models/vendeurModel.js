// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createVendeur(data) {
  const [id] = await knex('vendeurs').insert({data});
  return getVendeurById(id)
}

// Read
async function getAllVendeurs() {
  return await knex.select().from('vendeurs');
}

async function getVendeurById(id) {
  return await knex('vendeurs').where({id}).first();
}

// Update
async function updateVendeur(id, name, description, lien, pays) {
  return await knex('vendeurs').where({id}).update({ name, description, lien, pays });
}

// Delete
async function deleteVendeur(id) {
  return await knex('vendeurs').where({id}).del();
}

module.exports = {
  create : createVendeur,
  getAll: getAllVendeurs,
  get: getVendeurById,
  update : updateVendeur,
  delete: deleteVendeur,
  routePrefix: 'vendeurs'
};


// npm install knex sqlite3