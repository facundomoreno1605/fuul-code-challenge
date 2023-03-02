import { AssetService } from '../services';
import express from 'express';

export default class AssetController {
  async createAsset(req: express.Request, res: express.Response) {
    const assetService = new AssetService();
    const { code, name } = req.body;

    const asset = await assetService.create({ code, name });

    return res.status(201).json({
      message: 'Asset created.',
      asset
    });
  }
}
