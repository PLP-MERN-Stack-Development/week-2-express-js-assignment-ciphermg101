const { NotFoundError, ValidationError } = require('../utils/errors');

const errorHandler = (err, req, res, next) => {
  if (err instanceof NotFoundError) {
    return res.status(404).json({ message: err.message });
  }
  if (err instanceof ValidationError) {
    return res.status(400).json({ message: err.message });
  }
  // Handle other types of errors
  return res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = errorHandler;