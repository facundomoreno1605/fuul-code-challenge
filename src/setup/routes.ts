import express from 'express';
import * as routers from '../routes';
import { ErrorHandlerMiddleware } from '../middlewares';

const AssetRouter = new routers.AssetRouter();

export default (app: express.Express) => {
  app.use('/api/assets', AssetRouter.routes);

  app.use(ErrorHandlerMiddleware);
};
