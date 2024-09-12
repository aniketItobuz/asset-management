import { config } from "../config/config.js";
import mongoose from "mongoose";

export const connectToMongoDB = async () => {
    try {
      await mongoose.connect(config.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB successfully");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
      process.exit(1); // Exit the process with a failure code
    }
  };