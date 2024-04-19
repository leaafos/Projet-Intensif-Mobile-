// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createCategories(data) {
  const [id] = await knex('categories').insert(data);
  return getCategoriesById(id)
}

// Read
async function getAllCategories() {
  return await knex.select().from('categories');
}

async function getCategoriesById(id) {
  return await knex('categories').where({id}).first();
}

// Update
async function updateCategories(id, name, description) {
  return await knex('categories').where({id}).update({name, description});
}

// Delete
async function deleteCategories(id) {
  return await knex('categories').where({id}).del();
}

module.exports = {
  create : createCategories,
  getAll: getAllCategories,
  get: getCategoriesById,
  update : updateCategories,
  delete: deleteCategories,
  routePrefix: 'categories'
};



// npm install knex sqlite3
