import mongoose from "mongoose";
import { passMongo } from "./config.js";
const mongoUri = `mongodb://Hernan:${passMongo}@ac-y1gewyn-shard-00-00.evynamh.mongodb.net:27017,ac-y1gewyn-shard-00-01.evynamh.mongodb.net:27017,ac-y1gewyn-shard-00-02.evynamh.mongodb.net:27017/?ssl=true&replicaSet=atlas-396yu9-shard-0&authSource=admin&retryWrites=true&w=majority`;

export const mongoConect = mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected to mongo db"))
  .catch((error) => console.log(error.message, "esto seria el error"));
