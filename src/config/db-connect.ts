import mongoose from 'mongoose';

export async function connectDb(){
    mongoose.connect(process.env.MONGODB_URL);
    mongoose.connection.on('error', (error: Error) => console.log('Error while connecting to database' + error));
}

