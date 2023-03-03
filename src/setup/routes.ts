import express from 'express';
import * as routers from '../routes';
import { ErrorHandlerMiddleware } from '../middlewares';

const AssetRouter = new routers.AssetRouter();
const ProductRouter = new routers.ProductRouter();
const PromotionRouter = new routers.PromotionRouter();

export default (app: express.Express) => {
  app.use('/api/assets', AssetRouter.routes);
  app.use('/api/products', ProductRouter.routes);
  app.use('/api/promotions', PromotionRouter.routes);

  app.use(ErrorHandlerMiddleware);
};
