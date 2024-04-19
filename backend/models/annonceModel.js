// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createAnnonces(data) {
  const [id] = await knex('annonces').insert({data});
  return getAnnoncesById(id)
}

// Read
async function getAllAnnonces() {
  return await knex.select().from('annonces');
}

async function getAnnoncesById(id) {
  return await knex('annonces').where({id}).first();
}

// Update
async function updateAnnonces(id, productsId, price) {
  return await knex('annonces').where({id}).update({productsId, price,});
}

// Delete
async function deleteAnnonces(id) {
  return await knex('alertes').where({id}).del();
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
