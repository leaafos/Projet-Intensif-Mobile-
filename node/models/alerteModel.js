// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('knex')(require('./knexfile')['development']);

// Create
async function createAlertes(alertesId, usersId, productsId, price, date, status) {
  return await knex('alertes').insert({alertesId, usersId, productsId, price, date, status});
}

// Read
async function getAllAlertes() {
  return await knex.select().from('alertes');
}

async function getAlertesById(alertesId) {
  return await knex('alertes').where({ alertesId }).first();
}

// Update
async function updateAlertes(alertesId,productsId, price, status) {
  return await knex('alertes').where({alertesId}).update({alertesId,productsId, price, status });
}

// Delete
async function deleteAlertes(alertesId) {
  return await knex('alertes').where({ alertesId }).del();
}

module.exports = {
  createAlertes,
  getAllAlertes,
  getAlertesById,
  updateAlertes,
  deleteAlertes
};

// npm install knex sqlite3
