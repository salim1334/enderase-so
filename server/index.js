
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const auditRoutes = require('./routes/audit');
const projectRoutes = require('./routes/projects');

// Express App
const app = express();

// Middleware
app.use(cors()); // Allow requests from the frontend
app.use(express.json()); // Parse JSON bodies

// API Routes
app.use('/api/audit-request', auditRoutes);
app.use('/api/projects', projectRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Listen for requests
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
