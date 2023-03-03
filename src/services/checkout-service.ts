import { CheckoutInterface } from '../models';
import { CheckoutRepository } from '../repositories';

export default class CheckoutService {
  private _checkoutRepository: CheckoutRepository;

  constructor() {
    this._checkoutRepository = new CheckoutRepository();
  }

  async create(checkout: CheckoutInterface) {
    return await this._checkoutRepository.create(checkout);
  }

  async update(id: string, checkout: Partial<CheckoutInterface>) {
    return await this._checkoutRepository.update(id, checkout);
  }

  async findOne(searchParams: object) {
    return await this._checkoutRepository.findOne(searchParams);
  }

  async findById(id: string) {
    return await this._checkoutRepository.findById(id);
  }

  async findAll() {
    return await this._checkoutRepository.findAll();
  }
}
