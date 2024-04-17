const { Router } = require("express");
const Produit = require('../models/produitModel');
const generic = require("./generique");

module.exports = generic(Produit);