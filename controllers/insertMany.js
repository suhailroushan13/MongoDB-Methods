import "../dbConnect.js";
import userModel from "../model/index.js";
import mongoose from "mongoose";
async function insertMany() {
  try {
    let check = await userModel.create([
      {
        firstname: "Laura",
        lastname: "Taylor",
        email: "laurataylor11@example.com",
        phone: "+1-555-555-8013",
        address: "369 Elm Avenue",
      },
      {
        firstname: "Suhail",
        lastname: "Roushan",
        email: "suhail11@gmail.com",
        phone: "+919618211621",
        address: "Hyderabad",
        __v: 0,
      },
    ]);
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

insertMany();
