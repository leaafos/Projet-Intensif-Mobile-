// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createMessage(data) {
  const [id] = await knex('messages').insert({data});
  return getMessageById(id)
}

// Read
async function getAllMessages() {
  return await knex.select().from('messages');
}

async function getMessageById(id) {
  return await knex('messages').where({id}).first();
}

// Delete
async function deleteMessage(id) {
  return await knex('messages').where({id}).del();
}

module.exports = {
  create : createMessage,
  getAll: getAllMessages,
  get: getMessageById,
  delete:   deleteMessage,
  routePrefix: 'messages'
};

// npm install knex sqlite3