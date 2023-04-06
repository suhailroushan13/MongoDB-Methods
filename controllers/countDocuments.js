import mongoose from "mongoose";
import "../dbConnect.js";
import userModel from "../model/index.js";
async function countAll() {
  try {
    let check = await userModel.countDocuments({});
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

countAll();

async function countSpecific() {
  try {
    let check = await userModel.countDocuments({ firstname: "Bob" });
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

countSpecific();
