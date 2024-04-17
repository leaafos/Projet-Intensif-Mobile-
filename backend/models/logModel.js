// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createLog(logsId, userId, date, heure) {
  return await knex('logs').insert({ logsId, userId, date, heure });
}

// Read
async function getAllLogs() {
  return await knex.select().from('logs');
}

async function getLogById(id) {
  return await knex('logs').where({ logsId }).first();
}

// Delete
async function deleteLog(id) {
  return await knex('logs').where({ logsId }).del();
}

module.exports = {
  create : createLog,
  getAll: getAllLogs,
  get: getLogById,
  delete: deleteLog,
  routePrefix: 'logs'
};

// npm install knex sqlite3