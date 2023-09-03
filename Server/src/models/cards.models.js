import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const cardCollection = "cards";
const cardSchema = new mongoose.Schema({
  name: { required: true, type: String },
  price: { required: true, type: Number },
  stock: { required: true, type: Boolean },
  type: { required: true, type: String },
  image: { required: false, type: String },
  discount: { required: true, type: Number },
});

cardSchema.plugin(mongoosePaginate);
const cardtModel = mongoose.model(cardCollection, cardSchema);

export default cardtModel;
