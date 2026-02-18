const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const errorHandler = require("./middleware/errorMiddleware");

const connectDB = require("./config/db");

// Route files
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

// Load environment variables
dotenv.config();

// Connect database
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://task-management-vivek.vercel.app/'
  ],
  allowedHeaders: ['content-Type', 'authorization'],
  methods:['POST', 'GET', 'PUT', 'DELETE'],
  credentials:true,
}));
app.use(express.json());


// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Global error handler
app.use(errorHandler);

// Basic route (health check)
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
