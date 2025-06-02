const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { validateProductCreation, validateProductUpdate } = require('../middleware/validation');
const { NotFoundError } = require('../utils/errors');

const router = express.Router();

// In-memory products database
let products = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop with 16GB RAM',
    price: 1200,
    category: 'electronics',
    inStock: true
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Latest model with 128GB storage',
    price: 800,
    category: 'electronics',
    inStock: true
  },
  {
    id: '3',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with timer',
    price: 50,
    category: 'kitchen',
    inStock: false
  }
];

// GET /api/products (with filtering, pagination, search)
router.get('/', (req, res) => {
  let { category, page = 1, limit = 10, search } = req.query;
  let filtered = [...products];

  if (category) {
    filtered = filtered.filter(p => p.category === category);
  }
  if (search) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  }

  // Pagination
  page = parseInt(page);
  limit = parseInt(limit);
  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  res.json({
    total: filtered.length,
    page,
    limit,
    products: paginated
  });
});

// GET /api/products/stats (product statistics)
router.get('/stats', (req, res) => {
  const stats = {};
  products.forEach(p => {
    stats[p.category] = (stats[p.category] || 0) + 1;
  });
  res.json(stats);
});

// GET /api/products/:id
router.get('/:id', (req, res, next) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return next(new NotFoundError('Product not found'));
  res.json(product);
});

// POST /api/products
router.post('/', validateProductCreation, (req, res) => {
  const { name, description, price, category, inStock } = req.body;
  const newProduct = { id: uuidv4(), name, description, price, category, inStock };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /api/products/:id
router.put('/:id', validateProductUpdate, (req, res, next) => {
  const idx = products.findIndex(p => p.id === req.params.id);
  if (idx === -1) return next(new NotFoundError('Product not found'));
  products[idx] = { ...products[idx], ...req.body };
  res.json(products[idx]);
});

// DELETE /api/products/:id
router.delete('/:id', (req, res, next) => {
  const idx = products.findIndex(p => p.id === req.params.id);
  if (idx === -1) return next(new NotFoundError('Product not found'));
  const deleted = products.splice(idx, 1);
  res.json(deleted[0]);
});

module.exports = router;