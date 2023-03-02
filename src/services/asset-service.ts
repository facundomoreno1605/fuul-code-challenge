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

  async findOne(searchParams: object) {
    return await this._assetRepository.findOne(searchParams);
  }

  async findById(id: string) {
    return await this._assetRepository.findById(id);
  }

  async findAll() {
    return await this._assetRepository.findAll();
  }
}
