const axios = require('axios');

const getJokesByCategory = async (category) => {
  console.log(category);
  const URL = `https://api.chucknorris.io/jokes/random?category=${category}`;
  const joke = await axios(URL);
  return joke.data.value;
};

const getJokesRandomly = async () => {
  const URL = 'https://api.chucknorris.io/jokes/random';
  const joke = await axios(URL);
  return joke.data.value;
};

module.exports = {
  getJokesByCategory,
  getJokesRandomly,
};