import express from 'express';
import Joi from 'joi';

const InputValidatorMiddleware = (schema: Joi.Schema) => {
  return (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      return res.status(422).json({
        message: 'Invalid request.',
        data: error.details
      });
    }

    return next();
  };
};

export default InputValidatorMiddleware;
