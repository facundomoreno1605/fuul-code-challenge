import { PriceInterface } from './common';
import ProductInterface from './product-interface';

export default interface CheckoutInterface {
  products: ProductInterface[];
  total: PriceInterface[];
}
