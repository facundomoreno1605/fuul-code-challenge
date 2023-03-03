import Joi from 'joi';
import { PromotionTypes } from '../../models/promotion-interface';

export default Joi.object({
  type: Joi.string()
    .valid(PromotionTypes.BULK_PURCHASE, PromotionTypes.TWO_FOR_ONE)
    .required(),
  itemsRequired: Joi.number().min(1).required()
});
