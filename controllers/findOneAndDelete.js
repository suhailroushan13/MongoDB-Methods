import "../dbConnect.js";
import userModel from "../model/index.js";
import mongoose from "mongoose";
async function findOneAndDelete() {
  try {
    let check = await userModel.findOneAndDelete({
      email: "alicejohnson@example.com",
    });
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

findOneAndDelete();
