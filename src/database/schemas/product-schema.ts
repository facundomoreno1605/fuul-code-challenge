import mongoose from 'mongoose';
import { ProductInterface } from '../../models';
import { Assets } from '../../models/common';

export default new mongoose.Schema<ProductInterface>({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    asset: {
      type: String,
      enum: [Assets.BTC, Assets.ETH],
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }
});
