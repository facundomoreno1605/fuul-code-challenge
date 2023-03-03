import mongoose from 'mongoose';
import PromotionInterface, {
  PromotionTypes
} from '../../models/promotion-interface';

export default new mongoose.Schema<PromotionInterface>({
  type: {
    type: String,
    enum: [PromotionTypes.BULK_PURCHASE, PromotionTypes.TWO_FOR_ONE],
    index: true,
    required: true
  },
  itemsRequired: {
    type: Number,
    required: true
  }
});
