// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createNotification(data) {
 const [id] = await knex('notifications').insert({data});
 return getNotificationById(id)
}

// Read
async function getAllNotifications() {
  return await knex.select().from('notifications');
}

async function getNotificationById(id) {
  return await knex('notifications').where({id}).first();
}

// Delete
async function deleteNotifications(id) {
  return await knex('notifications').where({id}).del();
}

module.exports = {
  create : createNotification,
  getAll: getAllNotifications,
  get: getNotificationById,
  delete: deleteNotifications,
  routePrefix: 'notifications'
};


// npm install knex sqlite3