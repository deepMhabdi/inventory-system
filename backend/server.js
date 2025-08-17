const express = require('express');
const dotenv = require('dotenv');
// const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors'); // optional but recommended for frontend API calls

dotenv.config();
const app = express();

// 🚨 Add these middlewares BEFORE routes
app.use(cors());
app.use(express.json()); // <-- Parse application/json
app.use(express.urlencoded({ extended: true })); // <-- Parse form data (optional)

// Connect DB
// connectDB();

// Routes
app.use('/api/auth', authRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
