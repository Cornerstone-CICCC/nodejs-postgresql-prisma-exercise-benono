import express from "express";
import productRouter from "./routes/product.routes";
import dotenv from "dotenv";
dotenv.config();

// Create server
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/products", productRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
