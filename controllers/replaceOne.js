import "../dbConnect.js";
import userModel from "../model/index.js";
import mongoose from "mongoose";
async function replaceOne() {
  try {
    let check = await userModel.replaceOne(
      { email: "suhailroushan@gmail.com" }, // New Replace
      { email: "amychen@example.com" } // Old One From DB
    );
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

replaceOne();
