// db.js - Fichier pour gérer les opérations CRUD avec Knex
//pas de création - get all 

const knex = require('../db');

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
  create : createHistoriques,
  getAll: getAllHistoriques,
  get: getAllHistoriques,
  update : updateHistoriques,
  delete: deleteHistoriques,
  routePrefix: 'historiques'
};

// npm install knex sqlite3
