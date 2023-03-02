import express from 'express';
import { ProductController } from '../controllers';
import { InputValidatorMiddleware } from '../middlewares';
import { ProductInputSchema } from '../middlewares/input-schemas';
import { RouterInterface } from './interfaces';

const router = express.Router();

export default class ProductRouter implements RouterInterface {
  private _productController: ProductController;

  constructor() {
    this._productController = new ProductController();
  }

  get routes() {
    router.get('/', this._productController.getAll);
    router.post(
      '/',
      InputValidatorMiddleware(ProductInputSchema),
      this._productController.create
    );

    return router;
  }
}
