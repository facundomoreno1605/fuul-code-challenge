import mongoose from 'mongoose';
import { PromotionSchema } from '../schemas';

export default mongoose.model('Promotions', PromotionSchema);
