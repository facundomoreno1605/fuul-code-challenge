import { AssetService, ProductService } from '../services';
import express from 'express';

export default class AssetController {
  async create(req: express.Request, res: express.Response) {
    const productService = new ProductService();
    const assetService = new AssetService();

    const {
      code,
      name,
      price: { assetCode, quantity },
      promotionType
    } = req.body;

    const asset = await assetService.findOne({ code: assetCode });

    if (!asset) {
      return res.status(422).json({
        message: `Asset with code: ${assetCode} not exists.`
      });
    }

    const product = await productService.create({
      code,
      name,
      price: {
        assetCode,
        quantity
      },
      promotionType
    });

    return res.status(201).json({
      message: 'Product created.',
      product
    });
  }

  async getAll(req: express.Request, res: express.Response) {
    const productService = new ProductService();

    const products = await productService.findAll();

    return res.status(200).json({
      products
    });
  }
}
