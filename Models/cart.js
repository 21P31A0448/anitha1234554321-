import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    username: String,
    title: String,
    price: Number,
});

export default mongoose.model('CartItem', cartItemSchema);