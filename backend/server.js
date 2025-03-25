const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config(); // For storing MongoDB URI in .env file

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define User Schema
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  organization: String,
  whitepaperTitle: String,
  timestamp: { type: Date, default: Date.now },
});

// Create Model for users_details collection
const User = mongoose.model("UserDetail", userSchema, "users_details");

// API to store user details in MongoDB
app.post("/submit-form", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json({ message: "User data stored successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error saving data" });
  }
});

// Serve whitepapers from 'whitepapers' folder
app.use("/whitepapers", express.static(path.join(__dirname, "whitepapers")));

// API to download whitepaper
app.get("/download-whitepaper/:title", (req, res) => {
  const fileName = `${req.params.title}.pdf`;
  const filePath = path.join(__dirname, "whitepapers", fileName);

  res.download(filePath, fileName, (err) => {
    if (err) {
      console.error("❌ Error downloading file:", err);
      res.status(500).send("Error downloading file. Please try again.");
    }
  });
});


// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
