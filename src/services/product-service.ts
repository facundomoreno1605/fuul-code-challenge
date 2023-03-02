import { ProductInterface } from '../models';
import { ProductRepository } from '../repositories';

export default class ProductService {
  private _productRepository: ProductRepository;

  constructor() {
    this._productRepository = new ProductRepository();
  }

  async create(asset: ProductInterface) {
    return await this._productRepository.create(asset);
  }

  async findOne(searchParams: object) {
    return await this._productRepository.findOne(searchParams);
  }

  async findById(id: string) {
    return await this._productRepository.findById(id);
  }

  async findAll() {
    return await this._productRepository.findAll();
  }
}
