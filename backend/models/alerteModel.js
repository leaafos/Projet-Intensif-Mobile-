// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createAlertes(data) {
  const [id] = await knex('alertes').insert(data);
  return getAlertesById(id)
}

// Read
async function getAllAlertes() {
  return await knex.select().from('alertes');
}

async function getAlertesById(id) {
  return await knex('alertes').where({id}).first();
}

// Update
async function updateAlertes(id,productsId, price, status) {
  return await knex('alertes').where({id}).update({productsId, price, status });
}

// Delete
async function deleteAlertes(id) {
  return await knex('alertes').where({id}).del();
}

module.exports = {
  create : createAlertes,
  getAll: getAllAlertes,
  get: getAlertesById,
  delete: deleteAlertes,
  update : updateAlertes,
  routePrefix: 'alertes'
};


// npm install knex sqlite3
