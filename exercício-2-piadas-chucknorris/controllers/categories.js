const getCategories = require('../models/categories');

const listCategories = async (_req, res) => {
  const categories = await getCategories();
  return res.render('categories', { categories });
}

module.exports = listCategories;