const knex = require('knex')(require('./db.js')['development']);

async function createTable() {
  try {
    const exists = await knex.schema.hasTable('poubelles');
    if (!exists) {
      await knex.schema.createTable('poubelles', table => {
        table.increments('id').primary();
        table.integer('usersId');
        table.integer('productsId');
        table.integer('date');
      });
      console.log('La table "poubelles" a été créée avec succès.');
    } else {
      console.log('La table "poubelles" existe déjà.');
    }
    exists = await knex.schema.hasTable('notifications');
    if (!exists) {
      await knex.schema.createTable('notifications', table => {
        table.increments('id').primary();
        table.integer('productsId');
        table.integer('date');
        table.integer('heure');
        table.string('contenu');
      });
      console.log('La table "notifications" a été créée avec succès.');
    } else {
      console.log('La table "notifications" existe déjà.');
    }
    exists = await knex.schema.hasTable('historiques');
    if (!exists) {
      await knex.schema.createTable('historiques', table => {
        table.increments('id').primary();
        table.integer('productsId');
        table.integer('usersId');
        table.integer('heure');
        table.integer('date');
      });
      console.log('La table "historiques" a été créée avec succès.');
    } else {
      console.log('La table "historiques" existe déjà.');
    }
    exists = await knex.schema.hasTable('produits');
    if (!exists) {
      await knex.schema.createTable('produits', table => {
        table.increments('id').primary();
        table.string('name');
        table.string('description');
        table.string('categoriesId');
        table.string('nomPlateforme');
        table.string('commentairesId');
        table.string('taille');
        table.string('image'); 
        table.integer('priceConseille');
      });
      console.log('La table "produits" a été créée avec succès.');
    } else {
      console.log('La table "produits" existe déjà.');
    }
    exists = await knex.schema.hasTable('alertes');
    if (!exists) {
      await knex.schema.createTable('alertes', table => {
        table.increments('id').primary();
        table.integer('usersId');
        table.integer('productsId');
        table.integer('price');
        table.integer('date');
        table.boolean('status');
      });
      console.log('La table "alertes" a été créée avec succès.');
    } else {
      console.log('La table "alertes" existe déjà.');
    }
    exists = await knex.schema.hasTable('categories');
    if (!exists) {
      await knex.schema.createTable('categories', table => {
        table.increments('id').primary();
        table.string('name');
        table.string('description');
      });
      console.log('La table "categories" a été créée avec succès.');
    } else {
      console.log('La table "categories" existe déjà.');
    }
    exists = await knex.schema.hasTable('annonces');
    if (!exists) {
      await knex.schema.createTable('annonces', table => {
        table.increments('id').primary();
        table.integer('price');
        table.integer('vendeursId');
        table.integer('productsId');
        table.integer('date');
        table.string('lien');
      });
      console.log('La table "annonces" a été créée avec succès.');
    } else {
      console.log('La table "annonces" existe déjà.');
    }
    exists = await knex.schema.hasTable('logs');
    if (!exists) {
      await knex.schema.createTable('logs', table => {
        table.increments('id').primary();
        table.integer('usersId');
        table.integer('heure');
        table.integer('date');
      });
      console.log('La table "logs" a été créée avec succès.');
    } else {
      console.log('La table "logs" existe déjà.');
    }
    exists = await knex.schema.hasTable('favoris');
    if (!exists) {
      await knex.schema.createTable('favoris', table => {
        table.increments('id').primary();
        table.integer('usersId');
        table.integer('productsId');
        table.integer('collectionsId')
        table.integer('date');
        table.integer('annoncesId');
      });
      console.log('La table "favoris" a été créée avec succès.');
    } else {
      console.log('La table "favoris" existe déjà.');
    }
    exists = await knex.schema.hasTable('users');
    if (!exists) {
      await knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('pseudo');
        table.string('email');
        table.integer('telephone');
        table.integer('motDePasse');
        table.string('adresse');
        table.string('ville');
        table.integer('codePostal');
        table.string('pays');
        table.integer('dateInscription');
        table.string('langue');
        table.boolean('status');
        table.integer('dateNaissance');
        table.string('image');
      });
      console.log('La table "users" a été créée avec succès.');
    } else {
      console.log('La table "users" existe déjà.');
    }
    exists = await knex.schema.hasTable('messages');
    if (!exists) {
      await knex.schema.createTable('messages', table => {
        table.increments('id').primary();
        table.integer('vendeursId');
        table.integer('usersId');
        table.string('message');
        table.boolean('status');
        table.integer('date');
        table.integer('heure');
      });
      console.log('La table "messages" a été créée avec succès.');
    } else {
      console.log('La table "messages" existe déjà.');
    }
    exists = await knex.schema.hasTable('orderDetails');
    if (!exists) {
      await knex.schema.createTable('orderDetails', table => {
        table.increments('id').primary();
        table.integer('ordersId');
        table.integer('annoncesId');
        table.boolean('paiementType');
        table.integer('quantite');
        table.integer('total');
      });
      console.log('La table "orderDetails" a été créée avec succès.');
    } else {
      console.log('La table "orderDetails" existe déjà.');
    }
    exists = await knex.schema.hasTable('order');
    if (!exists) {
      await knex.schema.createTable('order', table => {
        table.increments('id').primary();
        table.integer('usersId');
        table.integer('vendeursId');
        table.integer('date');
        table.boolean('status');
      });
      console.log('La table "order" a été créée avec succès.');
    } else {
      console.log('La table "order" existe déjà.');
    }
    exists = await knex.schema.hasTable('order');
    if (!exists) {
      await knex.schema.createTable('order', table => {
        table.increments('id').primary();
        table.integer('usersId');
        table.integer('vendeursId');
        table.integer('date');
        table.boolean('status');
      });
      console.log('La table "order" a été créée avec succès.');
    } else {
      console.log('La table "order" existe déjà.');
    }
    exists = await knex.schema.hasTable('commentaires');
    if (!exists) {
      await knex.schema.createTable('commentaires', table => {
        table.increments('id').primary();
        table.integer('usersId');
        table.integer('productsId');
        table.string('commentaire');
        table.integer('note');
      });
      console.log('La table "commentaires" a été créée avec succès.');
    } else {
      console.log('La table "commentaires" existe déjà.');
    }
    exists = await knex.schema.hasTable('vendeurs');
    if (!exists) {
      await knex.schema.createTable('vendeurs', table => {
        table.increments('id').primary();
        table.integer('usersId');
        table.integer('annoncesId');
        table.string('name');
        table.integer('commentairesId');
        table.string('description');
        table.string('lien');
        table.string('pays');
      });
      console.log('La table "vendeurs" a été créée avec succès.');
    } else {
      console.log('La table "vendeurs" existe déjà.');
    }
    exists = await knex.schema.hasTable('collections');
    if (!exists) {
      await knex.schema.createTable('collections', table => {
        table.increments('id').primary();
        table.string('name');
      });
      console.log('La table "collections" a été créée avec succès.');
    } else {
      console.log('La table "collections" existe déjà.');
    }
  } catch (error) {
    console.error('Erreur lors de la création de la table :', error);
  } finally {
    await knex.destroy();
  }
}

createTable();