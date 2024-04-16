// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('knex')(require('./knexfile')['development']);

// Create
async function createUser(userId, pseudo, email, telephone, motDePasse, adresse, ville, codePostal, pays, dateInscription, langue, status, dateNaissance, photo) {
  return await knex('users').insert({userId, pseudo, email, telephone, motDePasse, adresse, ville, codePostal, pays, dateInscription, langue, status, dateNaissance, photo });
}

// Read
async function getAllUsers() {
  return await knex.select().from('users');
}

async function getUserById(userId) {
  return await knex('users').where({ userId }).first();
}

// Update
async function updateUser(userId, pseudo, email, telephone, motDePasse, adresse, ville, codePostal, pays, langue, status, dateNaissance, photo) {
  return await knex('users').where({ userId }).update({ pseudo, email, telephone, motDePasse, adresse, ville, codePostal, pays, langue, status, dateNaissance, photo });
}

// Delete
async function deleteUser(userId) {
  return await knex('users').where({ userId }).del();
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};

// npm install knex sqlite3