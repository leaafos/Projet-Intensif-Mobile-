// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createUser(data) {
  const [id] = await knex('users').insert({data});
  return getUserById(id)
}

// Read
async function getAllUsers() {
  return await knex.select().from('users');
}

async function getUserById(id) {
  return await knex('users').where({id}).first();
}

// Update
async function updateUser(id, pseudo, email, telephone, motDePasse, adresse, ville, codePostal, pays, langue, status, dateNaissance, photo) {
  return await knex('users').where({id}).update({ pseudo, email, telephone, motDePasse, adresse, ville, codePostal, pays, langue, status, dateNaissance, photo });
}

// Delete
async function deleteUser(id) {
  return await knex('users').where({id}).del();
}

module.exports = {
  create : createUser,
  getAll: getAllUsers,
  get: getUserById,
  getUserById, 
  update : updateUser,
  delete: deleteUser,
  routePrefix: 'users'
};

// npm install knex sqlite3