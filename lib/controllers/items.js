const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Item = require('../models/Item');

module.exports = Router()

// TO DO - implement items CRUD
  .post('/', [authenticate], async (req, res, next) => {
    try {
      const item = await Item.insert({
        description: req.params.description,
        qty: req.params.qty,
        user_id: req.params.user_id,
      });
      res.json(item);
    } catch (e) {
      next(e);
    }
  })

  .get('/', [authenticate], async (req, res, next) => {
    try {
      const item = await Item.getAll();
      res.json(item);
    } catch (e) {
      next(e);
    }
  });

