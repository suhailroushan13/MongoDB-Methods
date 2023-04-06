import "../dbConnect.js";
import userModel from "../model/index.js";
import mongoose from "mongoose";
async function findOneAndReplace() {
  try {
    let check = await userModel.findOneAndReplace(
      { email: "davidlee@example.com" },
      { email: "suhail@gmail.com" },
      { new: true }
    );
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

findOneAndReplace();

//In summary, findOneAndReplace replaces the entire matched
// document with a new document, while findOneAndUpdate
// updates one or more fields of the matched document.
// Replace does not has set,inc,push,pull
// it deletes the old object
