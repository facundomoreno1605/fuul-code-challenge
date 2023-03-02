import mongoose from 'mongoose';
import { MONGO_URI } from '../configs';

export default () => {
  mongoose
    .connect(MONGO_URI as string)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.log(`Error connecting to MongoDB: ${err}`);

      process.exit(1);
    });
};
