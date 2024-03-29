const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await cacauTrybe.getChocolatesByName(name);
  if (chocolates.length === 0) {
    res.status(404).json([]);
  }
  res.status(200).json(chocolates);
});

app.get('/chocolates', async (_req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (_req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await cacauTrybe.getChocolateById(Number(id));

  if (!chocolate) {
    return res.status(404).json({ message: 'Chocolate not found' });
  }
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;

  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));

  if (!chocolates) {
    return res.status(404).json({ message: 'brand not found' });
  }
  res.status(200).json({ chocolates });
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  
  const chocolate = await cacauTrybe.UpdateChocolate(id, name, brandId);
  
  if (!chocolate) {
    return res.status(404).json({ message: 'Chocolate not found' });
  }

  res.status(200).json({chocolate})
});

module.exports = app;
