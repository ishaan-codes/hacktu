import Razorpay from "razorpay";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// console.log("Razorpay Key ID:", process.env.RAZORPAY_KEY_ID);
// console.log("Razorpay Key Secret:", process.env.RAZORPAY_KEY_SECRET);

export const createOrder = async (req, res) => {
  const options = {
    amount: req.body.amount * 100, // Razorpay expects amount in paise (INR)
    currency: "INR",
    receipt: crypto.randomBytes(10).toString("hex"),
  };

  try {
    const order = await razorpayInstance.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};