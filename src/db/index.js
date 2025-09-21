import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Simulate database connection logic
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}/${process.env.DB_NAME}`
    );
    console.log(
      `MongoDB connected: ${connectionInstance.connection.host} on port ${connectionInstance.connection.port} `
    );
  } catch (error) {
    console.log(
      "Error details:",
      `${process.env.MONGO_URL}/${process.env.DB_NAME}`
    );
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
