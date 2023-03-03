import { CheckoutService, ProductService } from '../services';
import express from 'express';

export default class AssetController {
  async create(req: express.Request, res: express.Response) {
    const checkoutService = new CheckoutService();
    const productService = new ProductService();

    const { productId, quantity } = req.body;

    const product = await productService.findById(productId);

    if (!product) {
      return res.status(422).json({
        message: `Product with id: ${productId} not exists.`
      });
    }

    const checkoutOrder = await checkoutService.create({
      products: [
        {
          id: productId,
          quantity,
          code: product.code,
          name: product.name,
          price: product.price,
          promotionType: product.promotionType
        }
      ]
    });

    return res.status(201).json({
      message: 'Checkout order created.',
      checkoutOrder
    });
  }

  async addItem(req: express.Request, res: express.Response) {
    const checkoutService = new CheckoutService();
    const productService = new ProductService();

    const { id } = req.params;
    const { productId, quantity } = req.body;

    const checkoutOrder = await checkoutService.findById(id);

    if (!checkoutOrder) {
      return res.status(404).json({
        message: `Checkour order with id: ${id} not found.`
      });
    }

    const product = await productService.findById(productId);

    if (!product) {
      return res.status(422).json({
        message: `Product with id: ${productId} not exists.`
      });
    }

    checkoutOrder.products.forEach((product) => {
      if (product.id === productId) {
        product.quantity = product.quantity + quantity;
      }
    });

    await checkoutService.update(id, checkoutOrder);

    return res.status(200).json({
      message: `Checkout order updated.`
    });
  }

  async getAll(req: express.Request, res: express.Response) {
    const checkoutService = new CheckoutService();

    const checkoutOrders = await checkoutService.findAll();

    return res.status(200).json({
      checkoutOrders
    });
  }
}
