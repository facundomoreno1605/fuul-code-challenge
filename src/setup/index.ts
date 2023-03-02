import express from 'express';
import setMiddlewares from './middlewares';
import setRoutes from './routes';
import dbConnection from '../database/db-connection';

export default (app: express.Express) => {
  dbConnection();
  setMiddlewares(app);
  setRoutes(app);
};
