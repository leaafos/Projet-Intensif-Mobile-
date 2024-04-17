const { Router } = require("express");
const Model = require('../models/articleModel');

function generic(Model) {
const router = Router();

router.get("/"+Model.routePrefix +"", async (req, res) => {
  try {
    const articles = await Model.getAll();
    res.json(articles);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/"+Model.routePrefix +"", async (req, res) => {
  try {
    const article = await Model.create({
      ...req.body,
    });
    res.status(201).json(article);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/"+Model.routePrefix +"/:id", async (req, res) => {
  try {
    const article = await Model.get(parseInt(req.params.id));
    res.json(article);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/"+Model.routePrefix +"/:id", async (req, res) => {
  try {
    const article = await Model.update(
      parseInt(req.params.id),
      req.body
    );
    res.json(article);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/"+Model.routePrefix +"/:id", async (req, res) => {
  try {
    await Model.delete(parseInt(req.params.id));
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

return routeur
}

module.exports = generic;