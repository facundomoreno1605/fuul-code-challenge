import express from 'express';
import setMiddlewares from './middlewares';
import setRoutes from './routes';

export default (app: express.Express) => {
  setMiddlewares(app);
  setRoutes(app);
};
