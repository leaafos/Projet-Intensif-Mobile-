// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('knex')(require('./knexfile')['development']);

// Create
async function createVendeur(vendeursId, name, annoncesId, commentairesId, description, lien, pays) {
  return await knex('vendeurs').insert({ vendeursId, name, annoncesId, commentairesId, description, lien, pays});
}

// Read
async function getAllVendeurs() {
  return await knex.select().from('vendeurs');
}

async function getVendeurById(vendeursId) {
  return await knex('vendeurs').where({ vendeursId }).first();
}

// Update
async function updateVendeur(vendeursId, name, description, lien, pays) {
  return await knex('vendeurs').where({ vendeursId }).update({ name, description, lien, pays });
}

// Delete
async function deleteVendeur(vendeursId) {
  return await knex('vendeurs').where({ vendeursId }).del();
}

module.exports = {
  createVendeur,
  getAllVendeurs,
  getVendeurById,
  updateVendeur,
  deleteVendeur
};

// npm install knex sqlite3