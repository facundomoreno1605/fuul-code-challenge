import { CheckoutInterface, ProductInterface } from '../models';
import { Assets, PriceInterface } from '../models/common';

export default class CheckoutService {
  private _checkout: CheckoutInterface;

  constructor() {
    this._checkout = {
      products: [],
      total: {
        asset: Assets.ETH,
        quantity: 0
      }
    };
  }

  scan(product: ProductInterface): void {
    this._checkout.products.push(product);
  }

  total(): PriceInterface {
    return this._checkout.total;
  }
}
