import mongoose from 'mongoose';
import PromotionInterface, {
  PromotionTypes
} from '../../models/promotion-interface';
import { ProductSchema } from './index';

export default new mongoose.Schema<PromotionInterface>({
  name: {
    type: String,
    enum: [PromotionTypes.BULK_PURCHASE, PromotionTypes.TWO_FOR_ONE],
    required: true
  },
  products: [ProductSchema]
});
