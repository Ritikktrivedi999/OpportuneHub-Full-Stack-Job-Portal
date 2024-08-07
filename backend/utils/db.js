import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected...successfully");
  } catch (error) {
    console.error("Error: Unable to connect to MongoDB", error);
  }
};

export default connectDB;
