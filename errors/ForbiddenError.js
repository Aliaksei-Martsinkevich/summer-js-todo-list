/**
 * Forbidden error. Access not granted.
 *
 * @constructor
 * @param {Number} status HTTP status code, default 403
 * @param {String} message Error message, default 'Forbidden'
 */
function ForbiddenError(status = 403, message = 'Forbidden') {
  Error.call(this, message);
  this.name = 'ForbiddenError';
  this.status = status;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, ForbiddenError);
  } else {
    this.stack = (new Error()).stack;
  }
}

ForbiddenError.prototype = Object.create(Error.prototype);

export default ForbiddenError;
