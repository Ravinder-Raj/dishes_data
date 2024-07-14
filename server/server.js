const express = require('express');
const connectDB = require('./config/db');
const dishRoutes = require('./routes/dishRoutes');
const dotenv = require('dotenv');
const cors = require('cors'); // Ensure cors is required

dotenv.config();

const app = express();

app.use(cors({
  origin: 'https://dishes-data.netlify.app'
}));

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/dishes', dishRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
