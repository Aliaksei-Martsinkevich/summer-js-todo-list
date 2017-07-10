function ServerError(status, message) {
  Error.call(this, message);
  this.name = 'ServerError';
  this.status = status;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, ServerError);
  } else {
    this.stack = (new Error()).stack;
  }
}

ServerError.prototype = Object.create(Error.prototype);

export default ServerError;
