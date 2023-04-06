import "../dbConnect.js";
import userModel from "../model/index.js";
import mongoose from "mongoose";
async function find() {
  try {
    let check = await userModel.find({});
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

find();
