import mongoose from 'mongoose';
const Schema= mongoose.Schema();

const transactionSchema = new mongoose.Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product"
            }
        ],
        amount: {
            type: Number,
            required: true,
        },
        razorpayPaymentId: {
            type: String,
            required: true,
        },
        razorpayOrderId: {
            type: String,
            required: true,
        },
        razorpaySignature: {
            type: String,
            required: true,
        },
        paymentMethod: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    }, {timestamps: true}
);
const transactionModel = mongoose.model('Transaction', transactionSchema);

export default transactionModel;