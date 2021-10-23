const express = require('express');
const listCategories = require('./controllers/categories');
const { listJokeByCategory, listRandomJoke } = require('./controllers/jokes');
require('dotenv').config();


const app = express();

app.set('view engine', 'ejs');

app.set('views', './views');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App na porta ${PORT}`));

app.get('/', (_req, res) => res.redirect('/categories'));

app.get('/categories', listCategories);

app.get('/jokes', listRandomJoke);

app.get('/jokes/:categorie', listJokeByCategory);