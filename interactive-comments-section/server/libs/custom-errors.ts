export class HTTPNotAuthorizedError extends Error {
  statusCode: number;

  constructor(message = 'You are not authorized') {
    super(message);
    this.name = 'NotAuthorizedError';
    this.statusCode = 401;
  }

  getError() {
    return {
      status: this.statusCode,
      message: this.message
    };
  }
}

export class HTTPNotFoundError extends Error {
  statusCode: number;

  constructor(message = 'Was not found') {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }

  getError() {
    return {
      status: this.statusCode,
      message: this.message
    };
  }
}

export class HTTPBadRequestError extends Error {
  statusCode: number;

  constructor(message = 'Bad Request') {
    super(message);
    this.name = 'BadRequestError';
    this.statusCode = 400;
  }

  getError() {
    return {
      status: this.statusCode,
      message: this.message
    };
  }
}
