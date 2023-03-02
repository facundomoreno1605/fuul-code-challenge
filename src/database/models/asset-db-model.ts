import mongoose from 'mongoose';
import { AssetSchema } from '../schemas';

export default mongoose.model('Assets', AssetSchema);
