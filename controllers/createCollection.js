import "../dbConnect.js";
import userModel from "../model/index.js";
import mongoose from "mongoose";

// 1. Create a Schema
const mySchema = new mongoose.Schema({
  age: {
    type: Number,
  },
});

// 2. Create a Model
// create a Mongoose model for the collection
const myModel = mongoose.model("dfed", mySchema, "NewCollection");
// CustomName,SchemaName,NewCollectioName
async function createCollection() {
  try {
    let check = await myModel.create({});
    console.log(`Collection created: ${check.collection.collectionName}`);
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

createCollection();
