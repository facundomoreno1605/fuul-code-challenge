import mongoose from 'mongoose';
import { CheckoutInterface } from '../../models';
import { PromotionTypes } from '../../models/promotion-interface';

export default new mongoose.Schema<CheckoutInterface>({
  products: [
    {
      id: {
        type: String,
        required: true
      },
      code: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
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
        required: false
      },
      subTotal: {
        assetCode: { type: String, required: false },
        quantity: {
          type: Number,
          required: false
        }
      },
      discount: {
        assetCode: { type: String, required: false },
        quantity: {
          type: Number,
          required: false
        }
      },
      total: {
        assetCode: { type: String, required: false },
        quantity: {
          type: Number,
          required: false
        }
      }
    }
  ],
  subTotal: [
    {
      assetCode: { type: String, required: false },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  discount: [
    {
      assetCode: { type: String, required: false },
      quantity: {
        type: Number,
        required: false
      }
    }
  ],
  total: [
    {
      assetCode: { type: String, required: false },
      quantity: {
        type: Number,
        required: false
      }
    }
  ]
});
