import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "job-portal",
      serverSelectionTimeoutMS: 5000
    });

    isConnected = conn.connections[0].readyState;
    console.log("✅ MongoDB Connected");

  } catch (error) {
    console.log("❌ DB Error:", error.message);
    throw error;
  }
};

export default connectDB;