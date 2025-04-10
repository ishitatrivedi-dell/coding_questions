const express = require('express');
const router = express.Router();

let products = [
  { id: 1, name: 'Phone', price: 699 },
  { id: 2, name: 'Laptop', price: 999 },
  { id: 3, name: 'Tablet', price: 499 }
];

// GET all products
router.get('/', (req, res) => {
  res.json(products);
});

// GET single product by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// POST add new product
router.post('/', (req, res) => {
  const { name, price } = req.body;
  if (!name || price == null) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update product (full replacement)
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;

  const productIndex = products.findIndex(p => p.id === id);
  if (productIndex === -1) return res.status(404).json({ error: 'Product not found' });

  products[productIndex] = { id, name, price };
  res.json(products[productIndex]);
});

// DELETE product
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Product not found' });

  products.splice(index, 1);
  res.status(200).json({ message: `Product with id ${id} deleted.` });
});

module.exports = router;
