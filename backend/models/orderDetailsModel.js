// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createOrderDetail(data) {
  const [id] = await knex('orderDetails').insert({data});
  return getOrderDetailById(id)
}

// Read
async function getAllOrderDetails() {
  return await knex.select().from('orderDetails');
}

async function getOrderDetailById(id) {
  return await knex('orderDetails').where({id}).first();
}


// Delete
async function deleteOrderDetail(id) {
  return await knex('orderDetails').where({id}).del();
}

module.exports = {
  create : createOrderDetail,
  getAll: getAllOrderDetails,
  get: getOrderDetailById,
  delete: deleteOrderDetail,
  routePrefix: 'orderDetails'
};


// npm install knex sqlite3