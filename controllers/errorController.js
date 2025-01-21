const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong in the server please try after sometime",
    });
  }
};

const globalErrorHandler = (error, req, res, next) => {
  error.status = error.status || "fail";
  error.statusCode = error.statusCode || 500;

  if (process.env.NODE_ENV === "development") sendErrorDev(error, res);
  if (process.env.NODE_ENV === "production") sendErrorProd(error, res);
};

export default globalErrorHandler;
