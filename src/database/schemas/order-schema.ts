import mongoose from 'mongoose';
import { OrderInterface } from '../../models';
import { Assets } from '../../models/common';
import { ProductSchema } from './index';

export default new mongoose.Schema<OrderInterface>({
  products: [ProductSchema],
  total: {
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
