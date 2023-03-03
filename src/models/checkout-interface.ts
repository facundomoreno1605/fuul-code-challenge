import { PriceInterface } from './common';
import { PromotionTypes } from './promotion-interface';

export interface CheckoutProductInterface {
  code: string;
  name: string;
  quantity: number;
  promotionType: PromotionTypes;
  price: PriceInterface;
  subTotal: PriceInterface;
  discount: PriceInterface;
  total: PriceInterface;
}

export default interface CheckoutInterface {
  products: CheckoutProductInterface[];
  subTotal: PriceInterface[];
  discount: PriceInterface[];
  total: PriceInterface[];
}
