import { CheckoutDB } from '../database/models';
import { CheckoutInterface } from '../models';
import BaseRepository from './base/base-repository';

export default class OrderRepository extends BaseRepository<CheckoutInterface> {
  constructor() {
    super(CheckoutDB);
  }
}
