import "../dbConnect.js";
import userModel from "../model/index.js";
import mongoose from "mongoose";
async function updateOne() {
  try {
    let check = await userModel.updateOne(
      { email: "suhail11@gmail.com" },
      { $set: { firstname: "Ali" } }
    );
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

updateOne();
