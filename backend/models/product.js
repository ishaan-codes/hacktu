import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String, 
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        required: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        required: true,
    }
},{timestamps: true});

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;