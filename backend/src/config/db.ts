import mongoose from 'mongoose';
import { MONGODB_URL } from './index'
import { ErrorMessages } from './errors';

const connectDB = async () => {
  try {
    if (!MONGODB_URL) {
      throw new Error('MONGODB_URL environment variable is not defined');
    }
    await mongoose.connect(MONGODB_URL);
  } catch (error) {
    console.error(ErrorMessages.DB_CONNECTION_FAILED);
    if (error instanceof Error) {
      console.error(error.message);
    }
    process.exit(1);
  }
};

export default connectDB;