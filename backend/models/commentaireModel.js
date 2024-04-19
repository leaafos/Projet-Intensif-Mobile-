// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createCommentaire(data) {
  const [id] = await knex('commentaires').insert({data});
  return getCommentaireById(id)
}

// Read
async function getAllCommentaires() {
  return await knex.select().from('commentaires');
}

async function getCommentaireById(id) {
  return await knex('commentaires').where({id}).first();
}

// Delete
async function deleteCommentaire(id) {
  return await knex('commentaires').where({id}).del();
}

module.exports = {
  create : createCommentaire,
  getAll: getAllCommentaires,
  get: getCommentaireById,
  delete: deleteCommentaire,
  routePrefix: 'commentaires'
};


// npm install knex sqlite3