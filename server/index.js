require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/auth");
const { requireAuth } = require("./middleware/auth");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000", // ✅ Use env for flexibility
    credentials: true,
  })
);

// 👇 Root route (for testing in browser)
app.get("/api", (req, res) => {
  res.send("Backend is running 🚀");
});

// Routes
app.use("/api/auth", authRoutes);

app.get("/api/protected", requireAuth, (req, res) => {
  res.json({ message: "Welcome, you are authenticated!", user: req.user });
});

// ----------------- Deployment Setup -----------------
if (process.env.NODE_ENV === "production") {
  // Serve frontend build
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return index.html for all other routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// ----------------------------------------------------

// DB connect + server start
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ Mongo error", err));
