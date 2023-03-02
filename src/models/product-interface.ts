import { PriceInterface } from './common';

export default interface ProductInterface {
  code: string;
  name: string;
  price: PriceInterface;
}
