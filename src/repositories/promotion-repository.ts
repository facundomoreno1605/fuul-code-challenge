import { PromotionDB } from '../database/models';
import { PromotionInterface } from '../models';
import BaseRepository from './base/base-repository';

export default class PromotionRepository extends BaseRepository<PromotionInterface> {
  constructor() {
    super(PromotionDB);
  }
}
