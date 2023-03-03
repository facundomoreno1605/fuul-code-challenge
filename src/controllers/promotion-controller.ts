import { PromotionService } from '../services';
import express from 'express';

export default class PromotionController {
  async create(req: express.Request, res: express.Response) {
    const promotionService = new PromotionService();

    const { type, itemsRequired } = req.body;

    const promotion = await promotionService.create({
      type,
      itemsRequired
    });

    return res.status(201).json({
      message: 'Promotion created.',
      promotion
    });
  }

  async getAll(req: express.Request, res: express.Response) {
    const promotionService = new PromotionService();

    const promotions = await promotionService.findAll();

    return res.status(200).json({
      promotions
    });
  }
}
