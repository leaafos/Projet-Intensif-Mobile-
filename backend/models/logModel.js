// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('knex')(require('./knexfile')['development']);

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
  createLog,
  getAllLogs,
  getLogById,
  deleteLog
};

// npm install knex sqlite3