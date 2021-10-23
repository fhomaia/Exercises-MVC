const { getJokesByCategory, getJokesRandomly } = require('../models/jokes');

const listJokeByCategory = async (req, res) => {
  const { categorie } = req.params;
  const joke = await getJokesByCategory(categorie);
  return res.render('jokes', { joke });
}

const listRandomJoke = async (req, res) => {
  const joke = await getJokesRandomly();
  return res.render('jokes', { joke });
}

module.exports = {
  listJokeByCategory,
  listRandomJoke,
};