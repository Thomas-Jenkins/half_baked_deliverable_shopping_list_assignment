const Item = require('../models/Item');

module.exports = async (req, res, next) => {
  try {
    const item = await Item.getById(req.params.id);
    if (req.user.id === item.user_id) {
      next();
    } else {
      throw new Error('Unauthorized');
    }
  } catch (err) {
    err.status = 403;
    next(err);
  }
};




