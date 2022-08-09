const errorMiddleware = (err, _req, res, _next) => {
  if (err.status) {
    const { status, message } = err;
    return res.status(status).json({ message });
  }

  // Ao finalizar o projeto, retornar 'Internal server error'
  return res.status(500).json({ message: err.message });
};

module.exports = errorMiddleware;
