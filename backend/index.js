import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { userRouter } from './Routers/user.js';
import { sellerRouter } from './Routers/seller.js';
import paymentRoutes from './Routers/paymentRoutes.js';
import productRoutes from './Routers/productRoutes.js';
import sellerRoutes from './Routers/sellerRoutes.js';
import transactionRoutes from './Routers/transactionRoutes.js';
import userRoutes from './Routers/userRoutes.js';
dotenv.config();

const url = process.env.MONGO_PASSWORD;

const app = express();
app.use(express.json());


app.use('/user', userRouter);
app.use('/seller', sellerRouter);

app.use(cors());
app.use('/api/payments', paymentRoutes);
app.use('/api/products', productRoutes);
app.use('/api/sellers', sellerRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/users', userRoutes);
async function main() {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
}
main();