import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import SellerModel from '../models/seller.js';
import { Router } from 'express';

const router = Router();

import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SELLER_PASSWORD; 

const signupSchema = z.object({
    SellerName: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
    phone: z.string().min(1),
    address: z.object({
        street: z.string().optional(),
        city: z.string().optional(),
        state: z.string().optional(),
        zip: z.string().optional(),
        country: z.string().optional(),
    }).optional(),
});


const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

router.post('/signup', async (req, res) => {
    try {
        const { SellerName, email, password, phone, address } = signupSchema.parse(req.body);

        const existingSeller = await SellerModel.findOne({ email });
        if (existingSeller) {
            return res.status(400).json({ message: 'Seller already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const seller = new SellerModel({
            SellerName,
            email,
            password: hashedPassword,
            phone,
            address,
        });

        await seller.save();

        res.status(201).json({ message: "Seller created successfully" });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ message: 'Validation error', errors: error.errors });
        }
        res.status(500).json({ message: 'Error creating seller', error });
    }
});

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = signinSchema.parse(req.body);

        const seller = await SellerModel.findOne({ email });
        if (!seller) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, seller.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: seller._id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ seller, token });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ message: 'Validation error', errors: error.errors });
        }
        res.status(500).json({ message: 'Error signing in', error });
    }
});

export { router as sellerRouter };
