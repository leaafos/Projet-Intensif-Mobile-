// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('knex')(require('./knexfile')['development']);

// Create
async function createHistoriques(hisotriquesId, usersId, productsId, date, heure) {
  return await knex('users').insert({hisotriquesId, usersId, productsId, date, heure});
}

// Read
async function getAllHistoriques() {
  return await knex.select().from('historiques');
}

async function getHistoriquesById(historiquesId) {
  return await knex('historiques').where({ historiquesId }).first();
}

// Update
async function updateHistoriques(historiquesId, usersId, productsID) {
  return await knex('historiques').where({historiquesId}).update({historiquesId, usersId, productsID  });
}

// Delete
async function deleteHistoriques(historiquesId) {
  return await knex('users').where({ historiquesId }).del();
}

module.exports = {
  createHistoriques,
  getAllHistoriques,
  getHistoriquesById,
  updateHistoriques,
  deleteHistoriques
};

// npm install knex sqlite3
