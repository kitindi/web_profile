import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://abdul:1234@cluster0.cvqoj.mongodb.net/project");
    console.log("DB Connection Successful");
  } catch (error) {
    console.log("DB Connection Failed");
  }
};
