import express from 'express';
import { AssetController } from '../controllers';
import { InputValidatorMiddleware } from '../middlewares';
import { AssetInputSchema } from '../middlewares/input-schemas';
import { RouterInterface } from './interfaces';

const router = express.Router();

export default class AssetRouter implements RouterInterface {
  private _assetController: AssetController;

  constructor() {
    this._assetController = new AssetController();
  }

  get routes() {
    router.get('/', this._assetController.getAll);
    router.post(
      '/',
      InputValidatorMiddleware(AssetInputSchema),
      this._assetController.create
    );

    return router;
  }
}
