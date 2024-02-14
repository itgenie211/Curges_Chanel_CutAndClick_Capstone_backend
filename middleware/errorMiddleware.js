const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace

  // Handle different types of errors
  if (err.name === 'ValidationError') {
      // Handle Mongoose validation errors
      return res.status(400).json({ message: err.message });
  }

  // Handle other types of errors
  return res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = errorMiddleware;