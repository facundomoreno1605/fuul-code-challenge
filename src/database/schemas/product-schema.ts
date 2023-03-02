import mongoose from 'mongoose';
import { ProductInterface } from '../../models';

export default new mongoose.Schema<ProductInterface>({
  code: {
    type: String,
    unique: true,
    index: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    asset: { type: mongoose.Schema.Types.ObjectId, ref: 'Assets' },
    quantity: {
      type: Number,
      required: true
    }
  }
});
