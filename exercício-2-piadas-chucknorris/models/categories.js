const axios = require('axios');

const getCategories = async () => {
  const URL = 'https://api.chucknorris.io/jokes/categories';
  const categories = await axios(URL);
  return categories.data;
};

module.exports = getCategories;