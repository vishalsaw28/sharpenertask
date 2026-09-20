const sendErrorResponse = (res, err) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    message: message,
    status: false,
  });
};

module.exports = {
  sendErrorResponse,
};
