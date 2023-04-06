import "../dbConnect.js";
import userModel from "../model/index.js";
import mongoose from "mongoose";
async function insertOne() {
  try {
    let check = await userModel.create({
      firstname: "Suhail",
      lastname: "Roushan",
      email: "suhail@gmail.com",
      phone: "+919618211626",
      address: "Hyderabad",
    });
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

insertOne();
