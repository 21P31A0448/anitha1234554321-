import mongoose from "mongoose";

const sparezdataSchema = new mongoose.Schema({
  title: {
    type: String
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  price2: {
    type: Number,
  },
});

export default mongoose.model('sparesdata', sparezdataSchema);