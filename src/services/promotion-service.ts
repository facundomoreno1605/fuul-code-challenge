import { PromotionInterface } from '../models';
import { PromotionRepository } from '../repositories';

export default class PromotionService {
  private _promotionRepository: PromotionRepository;

  constructor() {
    this._promotionRepository = new PromotionRepository();
  }

  async create(promotion: PromotionInterface) {
    return await this._promotionRepository.create(promotion);
  }

  async findOne(searchParams: object) {
    return await this._promotionRepository.findOne(searchParams);
  }

  async findById(id: string) {
    return await this._promotionRepository.findById(id);
  }

  async findAll() {
    return await this._promotionRepository.findAll();
  }
}
