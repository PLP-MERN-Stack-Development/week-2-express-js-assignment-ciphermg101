require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('./routes/products');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(logger);
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});

// Auth middleware only for auth routes
app.use('/api/auth', auth);

// Use products routes
app.use('/api/products', productsRouter);


// Error handling middleware (should be last)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;