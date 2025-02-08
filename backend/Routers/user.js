import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import UserModel from '../models/user.js';
import { Router } from 'express';

const router = Router();
import dotenv from 'dotenv';
dotenv.config();
const JWT_SECRET = process.env.JWT_USER_PASSWORD; 

const signupSchema = z.object({
    username: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    address: z.object({
        street: z.string().optional(),
        city: z.string().optional(),
        state: z.string().optional(),
        zip: z.string().optional(),
        country: z.string().optional(),
    }).optional(),
    phone: z.string().optional(),
});

const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

router.post('/signup', async (req, res) => {
    try {
        const { username, email, password, firstName, lastName, address, phone } = signupSchema.parse(req.body);

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new UserModel({
            username,
            email,
            password: hashedPassword,
            firstName,
            lastName,
            address,
            phone,
        });

        await user.save();


        res.status(201).json({ message:"User created successfully" });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ message: 'Validation error', errors: error.errors });
        }
        res.status(500).json({ message: 'Error creating user', error });
    }
});

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = signinSchema.parse(req.body);
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ user, token });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ message: 'Validation error', errors: error.errors });
        }
        res.status(500).json({ message: 'Error signing in', error });
    }
});

export { router as userRouter };
