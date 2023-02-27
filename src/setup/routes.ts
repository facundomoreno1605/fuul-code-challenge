import express from 'express';
import routes from '../routes';
import middlewares from '../middlewares';

export default (app: express.Express) => {
  app.use('/api/test', routes.testRouter);

  app.use(middlewares.errorHandler);
};
