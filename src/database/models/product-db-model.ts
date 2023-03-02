import mongoose from 'mongoose';
import { ProductSchema } from '../schemas';

export default mongoose.model('Products', ProductSchema);
