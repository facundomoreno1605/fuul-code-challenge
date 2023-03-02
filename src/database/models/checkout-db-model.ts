import mongoose from 'mongoose';
import { CheckoutSchema } from '../schemas';

export default mongoose.model('Checkouts', CheckoutSchema);
