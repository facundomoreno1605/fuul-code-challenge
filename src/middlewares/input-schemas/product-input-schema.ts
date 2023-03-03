import Joi from 'joi';
import { PromotionTypes } from '../../models/promotion-interface';

export default Joi.object({
  code: Joi.string().length(3).required(),
  name: Joi.string().min(3).max(50).required(),
  price: Joi.object({
    assetCode: Joi.string().length(3).required(),
    quantity: Joi.number().min(1).required()
  }),
  promotionType: Joi.string().valid(
    PromotionTypes.BULK_PURCHASE,
    PromotionTypes.TWO_FOR_ONE
  )
});
