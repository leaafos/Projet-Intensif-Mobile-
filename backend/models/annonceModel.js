// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

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
async function updateAnnonces(annoncesId, productsId, price) {
  return await knex('annonces').where({annoncesId}).update({annoncesId, productsId, price,});
}

// Delete
async function deleteAnnonces(annoncesId) {
  return await knex('alertes').where({ annoncesId }).del();
}

module.exports = {
  create : createAnnonces,
  getAll: getAllAnnonces,
  get: getAnnoncesById,
  update : updateAnnonces,
  delete: deleteAnnonces,
  routePrefix: 'annonces'
};

// npm install knex sqlite3
