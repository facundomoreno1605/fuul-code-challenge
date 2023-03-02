import { AssetService, ProductService } from '../services';
import express from 'express';

export default class AssetController {
  async create(req: express.Request, res: express.Response) {
    const productService = new ProductService();
    const assetService = new AssetService();

    const {
      code,
      name,
      price: { assetCode, quantity }
    } = req.body;

    let product = await productService.findOne({ code });

    if (product) {
      return res.status(422).json({
        message: `Product with code: ${code} already exists.`
      });
    }

    const asset = await assetService.findOne({ code: assetCode });

    if (!asset) {
      return res.status(422).json({
        message: `Asset with code: ${assetCode} not exists.`
      });
    }

    product = await productService.create({
      code,
      name,
      price: {
        asset,
        quantity
      }
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
