import mongoose from 'mongoose';
import { CheckoutInterface } from '../../models';

export default new mongoose.Schema<CheckoutInterface>({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Products' }],
  total: [
    {
      asset: { type: mongoose.Schema.Types.ObjectId, ref: 'Assets' },
      quantity: {
        type: Number,
        required: true
      }
    }
  ]
});
