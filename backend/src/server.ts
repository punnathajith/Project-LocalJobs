import "reflect-metadata"; 
import "./presentation/di/container";
import app from "./app";
import connectDB from "./config/db";
import { PORT } from "./config/index"


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});