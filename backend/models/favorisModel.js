// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('knex')(require('./knexfile')['development']);

// Create
async function createFavoris(favorisId, userId, productId, collectionsId, annonceId, date) {
  return await knex('favoris').insert({ favorisId, userId, productId, collectionsId, annonceId, date });
}

// Read
async function getAllFavoris() {
  return await knex.select().from('favoris');
}

async function getFavorisById(favorisId) {
  return await knex('favoris').where({ favorisId }).first();
}

// Update
async function updateFavoris(productId,collectionsId, annonceId) {
  return await knex('favoris').where({ favorisId }).update({ productId, collectionsId, annonceId });
}

// Delete
async function deleteFavoris(favorisId) {
  return await knex('favoris').where({ favorisId }).del();
}

module.exports = {
  createFavoris,
  getAllFavoris,
  getFavorisById,
  updateFavoris,
  deleteFavoris
};

// npm install knex sqlite3