// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createLog(data) {
  const [id] = await knex('logs').insert({data});
  return getLogById(id)
}

// Read
async function getAllLogs() {
  return await knex.select().from('logs');
}

async function getLogById(id) {
  return await knex('logs').where({id}).first();
}

// Delete
async function deleteLog(id) {
  return await knex('logs').where({id}).del();
}

module.exports = {
  create : createLog,
  getAll: getAllLogs,
  get: getLogById,
  delete: deleteLog,
  routePrefix: 'logs'
};


// npm install knex sqlite3