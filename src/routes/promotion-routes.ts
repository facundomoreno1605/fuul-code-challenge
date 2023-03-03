import express from 'express';
import { PromotionController } from '../controllers';
import { InputValidatorMiddleware } from '../middlewares';
import { PromotionInputSchema } from '../middlewares/input-schemas';
import { RouterInterface } from './interfaces';

const router = express.Router();

export default class PromotionRouter implements RouterInterface {
  private _promotionController: PromotionController;

  constructor() {
    this._promotionController = new PromotionController();
  }

  get routes() {
    router.get('/', this._promotionController.getAll);
    router.post(
      '/',
      InputValidatorMiddleware(PromotionInputSchema),
      this._promotionController.create
    );

    return router;
  }
}
