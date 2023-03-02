import mongoose from 'mongoose';
import { AssetInterface } from '../../models';

export default new mongoose.Schema<AssetInterface>({
  code: {
    type: String,
    unique: true,
    index: true,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});
