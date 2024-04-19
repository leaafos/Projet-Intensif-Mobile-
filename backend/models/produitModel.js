// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createProduit(data) {
  const [id] = await knex('produits').insert(data);
  return getProduitById(id)
}

// Read
async function getAllProduits(filters = {}) {
  const products = await knex.select('produits.*', 'produitCategory.categoriesId', 'categories.name as categoryName').from('produits')
    .leftJoin('produitCategory', 'produits.id', '=', 'produitCategory.productsId')
    .leftJoin('categories', 'categories.id', '=', 'produitCategory.categoriesId')
    .where(filters);

  return Object.values(products.reduce((acc, prod) => {
    if (!acc[prod.id]) {
      acc[prod.id] = {
        ...prod,
        categories: []
      };
    }
    if(!prod.categoryName) return acc;
    acc[prod.id].categories.push({
      id: prod.categoriesId,
      name: prod.categoryName
    })

    return acc;
  }, {}));
}

async function getProduitById(id) {
  return await knex('produits').where({id}).first();
}

// Update
async function updateProduit(id, name, description, categoriesId, nomPlateforme, commentairesId, taille, image, priceConseille) {
  return await knex('produits').where({id}).update({name, description, categoriesId, nomPlateforme, commentairesId, taille,image,priceConseille});
}

// Delete
async function deleteProduit(id) {
  return await knex('produits').where({id}).del();
}

async function addCategory(product, categId) {
  await knex('produitCategory').insert({
    productsId: product.id,
    categoriesId: categId
  });
}
module.exports = {
  create: createProduit,
  getAll: getAllProduits,
  get: getProduitById,
  delete: deleteProduit,
  update: updateProduit,
  addCategory,
  routePrefix: 'produits'
};

// npm install knex sqlite3
