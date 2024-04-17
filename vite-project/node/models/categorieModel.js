// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('knex')(require('./knexfile')['development']);

// Create
async function createCategories(categoriesId, name, description) {
  return await knex('categories').insert({categoriesId, name, description});
}

// Read
async function getAllCategories() {
  return await knex.select().from('categories');
}

async function getCategoriesById(categoriesId) {
  return await knex('categories').where({categoriesId }).first();
}

// Update
async function updateCategories(categoriesId, name, description) {
  return await knex('categories').where({categoriesId}).update({categoriesId, name, description});
}

// Delete
async function deleteCategories(categoriesId) {
  return await knex('categories').where({ categoriesId }).del();
}

module.exports = {
  createCategories,
  getAllCategories,
  getCategoriesById,
  updateCategories,
  deleteCategories
};


// npm install knex sqlite3
