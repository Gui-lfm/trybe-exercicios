const express = require('express');
const fs = require('fs/promises');

const app = express();

app.use(express.json());

const readFile = async () => {
  const movies = await fs.readFile('src/movies.json', 'utf-8');
  return JSON.parse(movies);
};

const writeFile = async (movieArr) => {
  await fs.writeFile('src/movies.json', JSON.stringify(movieArr));
};

app.get('/movies', async (_req, res) => {
  const movies = await readFile();
  return res.status(200).json(movies);
});

app.get('/movies/:id', async (req, res) => {
  const movies = await readFile();
  const foundMovie = movies.find((movie) => movie.id === Number(req.params.id));
  return res.status(200).json(foundMovie);
});

app.post('/movies', async (req, res) => {
  const movies = await readFile();

  const newMovie = { id: movies.length + 1, ...req.body };

  movies.push(newMovie);
  await writeFile(movies);

  return res.status(201).json(newMovie);
});

app.put('/movies/:id', async (req, res) => {
  const movies = await readFile();
  const { id } = req.params;
  const { movie, price } = req.body;

  const selectedMovie = movies.find((movie) => movie.id === Number(id));

  if (!selectedMovie) {
    res.status(404).json({ message: 'Movie not found' });
  }

  selectedMovie.movie = movie;
  selectedMovie.price = price;
  await writeFile(movies);

  return res.status(200).json(movies);
});

app.delete('/movie/:id', async (req, res) => {
  const movies = await readFile();
  const { id } = req.params;

  const filteredMovies = movies.find((movie) => movie.id !== Number(id));
  
  await writeFile(filteredMovies);

  return res.status(204).end();
});

module.exports = app;
