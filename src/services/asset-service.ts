import { AssetInterface } from '../models';
import { AssetRepository } from '../repositories';

export default class AssetService {
  private _assetRepository: AssetRepository;

  constructor() {
    this._assetRepository = new AssetRepository();
  }

  async create(asset: AssetInterface) {
    return await this._assetRepository.create(asset);
  }
}
