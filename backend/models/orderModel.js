// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createOrder(ordersId, usersId, vendeursId, date, status) {
  return await knex('orders').insert({ ordersId, usersId, vendeursId, date, status });
}

// Read
async function getAllOrders() {
  return await knex.select().from('orders');
}

async function getOrderById(ordersId) {
  return await knex('orders').where({ ordersId }).first();
}

// Update
async function updateOrder(ordersId, status) {
  return await knex('orders').where({ ordersId }).update({ status });
}

// Delete
async function deleteOrder(ordersId) {
  return await knex('orders').where({ ordersId }).del();
}

module.exports = {
  create : createOrder,
  getAll: getAllOrders,
  get: getOrderById,
  update : updateOrder,
  delete: deleteOrder,
  routePrefix: 'orders'
};

// npm install knex sqlite3