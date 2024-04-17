// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createproducts(productsId, name, description, categories, namePlateforme, commentairesId, taille,image,priceConseille ) {
  return await knex('products').insert({productsId, name, description, categories, namePlateforme, commentairesId, taille,image,priceConseille });
}

// Read
async function getAllproducts() {
  return await knex.select().from('products');
}

async function getproductsById(productsId) {
  return await knex('products').where({ productsId }).first();
}

// Update
async function updateproducts(productsId, name, description, categories, taille,image,priceConseille) {
  return await knex('products').where({productsId}).update({productsId, name, description, categories, taille,image,priceConseille});
}

// Delete
async function deleteproducts(productsId) {
  return await knex('products').where({ productsId }).del();
}

module.exports = {
  create :createproducts,
  getAll: getAllproducts,
  get: getproductsById,
  delete: deleteproducts,
  update: updateproducts,
  routePrefix: 'products'
};

// npm install knex sqlite3
