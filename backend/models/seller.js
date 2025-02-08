import mongoose from "mongoose";
import ProductModel from "./product.js";


const sellerSchema = new mongoose.Schema({
    SellerName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String,
    }
}, {timestamps: true});

const SellerModel = mongoose.model('Seller', sellerSchema);

export default SellerModel;