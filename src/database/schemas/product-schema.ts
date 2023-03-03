import mongoose from 'mongoose';
import { ProductInterface } from '../../models';
import { PromotionTypes } from '../../models/promotion-interface';

export default new mongoose.Schema<ProductInterface>({
  code: {
    type: String,
    index: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    assetCode: { type: String, required: true },
    quantity: {
      type: Number,
      required: true
    }
  },
  promotionType: {
    type: String,
    enum: [PromotionTypes.BULK_PURCHASE, PromotionTypes.TWO_FOR_ONE],
    index: true,
    required: false
  }
});
