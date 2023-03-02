import { ProductDB } from '../database/models';
import { ProductInterface } from '../models';
import BaseRepository from './base/base-repository';

export default class ProductRepository extends BaseRepository<ProductInterface> {
  constructor() {
    super(ProductDB);
  }
}
