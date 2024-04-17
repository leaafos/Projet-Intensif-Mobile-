// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createOrderDetail(orderDetailsId, ordersId, annoncesId, quantite, paiementType, total) {
  return await knex('orderDetails').insert({ orderDetailsId, ordersId, annoncesId, quantite, paiementType, total });
}

// Read
async function getAllOrderDetails() {
  return await knex.select().from('orderDetails');
}

async function getOrderDetailById(orderDetailsId) {
  return await knex('orderDetails').where({ orderDetailsId }).first();
}


// Delete
async function deleteOrderDetail(orderDetailsId) {
  return await knex('orderDetails').where({ orderDetailsId }).del();
}

module.exports = {
  create : createOrderDetail,
  getAll: getAllOrderDetails,
  get: getOrderDetailById,
  delete: deleteOrderDetail,
  routePrefix: 'orderDetails'
};

// npm install knex sqlite3