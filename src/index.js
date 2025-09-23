import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB()
  .then(() => {
    // Start the Express server
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    app.on("error", (error) => {
      console.error("Express server error:", error);
    });
  })
  .catch((error) => {
    console.error("Error starting server:", error);
  });
