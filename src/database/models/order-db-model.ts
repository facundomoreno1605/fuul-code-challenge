import mongoose from 'mongoose';
import { OrderSchema } from '../schemas';

export default mongoose.model('Orders', OrderSchema);
