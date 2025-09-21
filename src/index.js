import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

// Connect to MongoDB
connectDB();

// (async () => {
//   try {
//     await mongoose.connect(`${MONGO_URL}/${DB_NAME}`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// })();
