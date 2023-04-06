import "../dbConnect.js";
import userModel from "../model/index.js";
import mongoose from "mongoose";
async function findOneAndUpdate() {
  try {
    let check = await userModel.findOneAndUpdate(
      { email: "alicejohnson@example.com" },
      { $set: { firstname: "Suhail" } },
      { new: true }
    );
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

findOneAndUpdate();

//In summary, findOneAndReplace replaces the entire matched 
// document with a new document, while findOneAndUpdate 
// updates one or more fields of the matched document.