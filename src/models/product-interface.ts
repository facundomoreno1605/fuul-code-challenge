import { PriceInterface } from './common';
import { PromotionTypes } from './promotion-interface';

export default interface ProductInterface {
  code: string;
  name: string;
  price: PriceInterface;
  promotionType: PromotionTypes;
}
