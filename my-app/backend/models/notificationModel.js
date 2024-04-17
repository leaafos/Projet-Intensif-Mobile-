// db.js - Fichier pour gérer les opérations CRUD avec Knex

const knex = require('../db');

// Create
async function createNotification(notificationsId, productsId, date, heure, contenu) {
  return await knex('notifications').insert({ notificationsId, productsId, date, heure, contenu});
}

// Read
async function getAllNotifications() {
  return await knex.select().from('notifications');
}

async function getNotificationById(notificationsId) {
  return await knex('notifications').where({ notificationsId }).first();
}

// Delete
async function deleteNotifications(notificationsId) {
  return await knex('notifications').where({ notificationsId }).del();
}

module.exports = {
  create : createNotification,
  getAll: getAllNotifications,
  get: getNotificationById,
  delete: deleteNotifications,
  routePrefix: 'notifications'
};

// npm install knex sqlite3