// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('knex')(require('./knexfile')['development']);

// Create
async function createMessage(messagesId, vendeursId, usersId, message, status, date, heure) {
  return await knex('messages').insert({ messagesId, vendeursId, usersId, message, status, date, heure });
}

// Read
async function getAllMessages() {
  return await knex.select().from('messages');
}

async function getMessageById(messagesId) {
  return await knex('messages').where({ messagesId }).first();
}

// Delete
async function deleteMessage(messagesId) {
  return await knex('messages').where({ messagesId }).del();
}

module.exports = {
  createMessage,
  getAllMessages,
  getMessageById,
  deleteMessage
};

// npm install knex sqlite3