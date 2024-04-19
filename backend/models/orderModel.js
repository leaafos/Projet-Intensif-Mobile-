// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createOrder(data) {
  const [id] = await knex('orders').insert({data});
  return getOrderById(id)
}

// Read
async function getAllOrders() {
  return await knex.select().from('orders');
}

async function getOrderById(id) {
  return await knex('orders').where({id}).first();
}

// Update
async function updateOrder(id, status) {
  return await knex('orders').where({id}).update({ status });
}

// Delete
async function deleteOrder(id) {
  return await knex('orders').where({id}).del();
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