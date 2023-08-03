import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: { required: true, type: String },
  price: { required: true, type: Number },
  stock: { required: true, type: Boolean },
  serie: { required: true, type: String },
});
