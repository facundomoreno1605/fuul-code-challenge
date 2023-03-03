import express from 'express';
import { CheckoutController } from '../controllers';
import {
  InputValidatorMiddleware,
  ParamValidatorMiddleware
} from '../middlewares';
import {
  CheckoutInputSchema,
  ObjectIdInputSchema
} from '../middlewares/input-schemas';
import { RouterInterface } from './interfaces';

const router = express.Router();

export default class AssetRouter implements RouterInterface {
  private _checkoutController: CheckoutController;

  constructor() {
    this._checkoutController = new CheckoutController();
  }

  get routes() {
    router.get('/', this._checkoutController.getAll);
    router.post(
      '/',
      InputValidatorMiddleware(CheckoutInputSchema),
      this._checkoutController.create
    );
    router.patch(
      '/:id',
      ParamValidatorMiddleware(ObjectIdInputSchema),
      InputValidatorMiddleware(CheckoutInputSchema),
      this._checkoutController.addItem
    );

    return router;
  }
}
