// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

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
  create : createMessage,
  getAll: getAllMessages,
  get: getMessageById,
  delete:   deleteMessage,
  routePrefix: 'messages'

};

// npm install knex sqlite3