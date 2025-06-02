const { ValidationError } = require('../utils/errors');

// Validate product creation
const validateProductCreation = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;

  if (!name || typeof name !== 'string') {
    return next(new ValidationError('Invalid product name'));
  }
  if (!description || typeof description !== 'string') {
    return next(new ValidationError('Invalid product description'));
  }
  if (typeof price !== 'number' || price <= 0) {
    return next(new ValidationError('Invalid product price'));
  }
  if (!category || typeof category !== 'string') {
    return next(new ValidationError('Invalid product category'));
  }
  if (typeof inStock !== 'boolean') {
    return next(new ValidationError('Invalid inStock value'));
  }

  next();
};

// Validate product update
const validateProductUpdate = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;

  if (name !== undefined && typeof name !== 'string') {
    return next(new ValidationError('Invalid product name'));
  }
  if (description !== undefined && typeof description !== 'string') {
    return next(new ValidationError('Invalid product description'));
  }
  if (price !== undefined && (typeof price !== 'number' || price <= 0)) {
    return next(new ValidationError('Invalid product price'));
  }
  if (category !== undefined && typeof category !== 'string') {
    return next(new ValidationError('Invalid product category'));
  }
  if (inStock !== undefined && typeof inStock !== 'boolean') {
    return next(new ValidationError('Invalid inStock value'));
  }

  next();
};

module.exports = {
  validateProductCreation,
  validateProductUpdate,
};