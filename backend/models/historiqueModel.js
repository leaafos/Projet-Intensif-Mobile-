// db.js - Fichier pour gérer les opérations CRUD avec Knex
//pas de création - get all 

const knex = require('../db');

// Create
async function createHistoriques(data) {
  const [id] = await knex('users').insert({data});
  return getHistoriquesById(id)
}

// Read
async function getAllHistoriques() {
  return await knex.select().from('historiques');
}

async function getHistoriquesById(id) {
  return await knex('historiques').where({id}).first();
}

// Update
async function updateHistoriques(id, usersId, productsID) {
  return await knex('historiques').where({id}).update({usersId, productsID});
}

// Delete
async function deleteHistoriques(id) {
  return await knex('users').where({id}).del();
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
