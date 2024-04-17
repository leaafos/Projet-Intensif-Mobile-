// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createCommentaire(commentairesId, usersId, productsId, commentaire, note) {
  return await knex('commentaires').insert({ commentairesId, usersId, productsId, commentaire, note });
}

// Read
async function getAllCommentaires() {
  return await knex.select().from('commentaires');
}

async function getCommentaireById(commentairesId) {
  return await knex('commentaires').where({ commentairesId }).first();
}

// Delete
async function deleteCommentaire(commentairesId) {
  return await knex('commentaires').where({ commentairesId }).del();
}

module.exports = {
  create : createCommentaire,
  getAll: getAllCommentaires,
  get: getCommentaireById,
  delete: deleteCommentaire,
  routePrefix: 'commentaires'
};

// npm install knex sqlite3