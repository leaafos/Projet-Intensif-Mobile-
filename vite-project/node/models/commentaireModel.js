// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('knex')(require('./knexfile')['development']);

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
  createCommentaire,
  getAllCommentaires,
  getCommentaireById,
  deleteCommentaire
};

// npm install knex sqlite3