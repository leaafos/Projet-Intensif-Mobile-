// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createProduit(produitsId, name, description, categories, namePlateforme, commentairesId, taille,image,priceConseille ) {
  return await knex('produits').insert({produitsId, name, description, categories, namePlateforme, commentairesId, taille,image,priceConseille });
}

// Read
async function getAllProduits() {
  return await knex.select().from('produits');
}

async function getProduitById(produitsId) {
  return await knex('produits').where({ produitsId }).first();
}

// Update
async function updateProduit(produitsId, name, description, categories, taille,image,priceConseille) {
  return await knex('produits').where({produitsId}).update({produitsId, name, description, categories, taille,image,priceConseille});
}

// Delete
async function deleteProduit(produitsId) {
  return await knex('produits').where({ produitsId }).del();
}

module.exports = {
  create: createProduit,
  getAll: getAllProduits,
  get: getProduitById,
  delete: deleteProduit,
  update: updateProduit,
  routePrefix: 'produits'
};

// npm install knex sqlite3
