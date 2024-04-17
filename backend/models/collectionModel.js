// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createCollection(collectionsId, name) {
  return await knex('collections').insert({ collectionsId, name});
}

// Read
async function getAllCollections() {
  return await knex.select().from('collections');
}

async function getCollectionById(collectionsId) {
  return await knex('collections').where({collectionsId }).first();
}

// Update
async function updateCollection(collectionsId, name) {
  return await knex('collections').where({collectionsId}).update({name});
}

// Delete
async function deleteCollection(collectionsId) {
  return await knex('collections').where({ collectionsId }).del();
}

module.exports = {
  create : createCollection,
  getAll: getAllCollections,
  get: getCollectionById,
  update : updateCollection,
  delete: deleteCollection,
  routePrefix: 'collections'
};


// npm install knex sqlite3