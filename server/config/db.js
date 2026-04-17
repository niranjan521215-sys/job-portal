import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "job-portal"
    });

    isConnected = db.connections[0].readyState;
    console.log("Database Connected");

  } catch (error) {
    console.log("DB Error:", error);
  }
};

export default connectDB;