import { PriceInterface } from './common';
import ProductInterface from './product-interface';

export default interface OrderInterface {
  products: ProductInterface[];
  total: PriceInterface;
}
