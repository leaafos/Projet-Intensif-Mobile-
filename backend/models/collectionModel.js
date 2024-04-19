// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createCollection(data) {
  const [id] = await knex('collections').insert({data});
  return getCollectionById(id)
}

// Read
async function getAllCollections() {
  return await knex.select().from('collections');
}

async function getCollectionById(id) {
  return await knex('collections').where({id}).first();
}

// Update
async function updateCollection(id, name) {
  return await knex('collections').where({id}).update({name});
}

// Delete
async function deleteCollection(id) {
  return await knex('collections').where({id}).del();
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