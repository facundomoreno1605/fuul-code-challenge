import { AssetService } from '../services';
import express from 'express';

export default class AssetController {
  async createAsset(req: express.Request, res: express.Response) {
    const assetService = new AssetService();
    const { code, name } = req.body;

    let asset = await assetService.findOne({ code });

    if (asset) {
      return res.status(422).json({
        message: `Asset with code: ${code} already exists.`
      });
    }

    asset = await assetService.create({ code, name });

    return res.status(201).json({
      message: 'Asset created.',
      asset
    });
  }

  async getAllAssets(req: express.Request, res: express.Response) {
    const assetService = new AssetService();

    const assets = await assetService.findAll();

    return res.status(200).json({
      assets
    });
  }
}
