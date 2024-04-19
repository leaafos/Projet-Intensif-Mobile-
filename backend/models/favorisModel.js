// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createFavoris(data) {
  const [id] = await knex('favoris').insert({data});
  return getFavorisById(id)
}

// Read
async function getAllFavoris() {
  return await knex.select().from('favoris');
}

async function getFavorisById(id) {
  return await knex('favoris').where({id}).first();
}

// Update
async function updateFavoris(id,productId,collectionsId, annonceId) {
  return await knex('favoris').where({id}).update({productId, collectionsId, annonceId });
}

// Delete
async function deleteFavoris(id) {
  return await knex('favoris').where({id}).del();
}

module.exports = {
  create : createFavoris,
  getAll: getAllFavoris,
  get: getFavorisById,
  update : updateFavoris,
  delete: deleteFavoris,
  routePrefix: 'favoris'
};


// npm install knex sqlite3