// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('knex')(require('./knexfile')['development']);

// Create
async function createAnnonces(annoncesId, productsId, price, date, lien, vendeurId) {
  return await knex('annonces').insert({annoncesId, productsId, price, date, lien, vendeurId});
}

// Read
async function getAllAnnonces() {
  return await knex.select().from('annonces');
}

async function getAnnoncesById(annoncesId) {
  return await knex('annonces').where({ annoncesId }).first();
}

// Update
async function updateAnnonces(annoncesId, productsId, price, lien,vendeurId) {
  return await knex('annonces').where({annoncesId}).update({annoncesId, productsId, price,});
}

// Delete
async function deleteAnnonces(annoncesId) {
  return await knex('alertes').where({ annoncesId }).del();
}

module.exports = {
  createAnnonces,
  getAllAnnonces,
  getAnnoncesById,
  updateAnnonces,
  deleteAnnonces 
};

// npm install knex sqlite3
