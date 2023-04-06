import mongoose from "mongoose";
import config from "config";
const connect = async () => {
  try {
    await mongoose.connect(config.get("DB_URI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};

connect();
