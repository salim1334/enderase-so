require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

// Import legacy routes (MongoDB)
const auditRoutes = require('./routes/audit');
const projectRoutes = require('./routes/projects');

// Import new routes (MySQL)
const authRoutes = require('./routes/auth');
const bidRoutes = require('./routes/bids');
const userRoutes = require('./routes/users');
const profileRoutes = require('./routes/profile');

// Import new models (MySQL)
const { User, Bid } = require('./models');

// Express App
const app = express();

// Middleware
app.use(cors()); // Allow requests from the frontend
app.use(express.json()); // Parse JSON bodies

// test route
app.get('/', (req, res) => {
  res.send('Enderase Solutions Backend is running');
});

// API Routes (Legacy)
// TODO: These routes will be deprecated or migrated from MongoDB
app.use('/api/audit-request', auditRoutes);
app.use('/api/projects', projectRoutes);

// API Routes (New)
app.use('/api/auth', authRoutes);
app.use('/api/bids', bidRoutes);
app.use('/api/users', userRoutes);
app.use('/api/profile', profileRoutes);

// Sync database and start server
// Replace your existing sync block with this:
sequelize
  .authenticate() 
  .then(() => {
    console.log('Connection to MySQL RDS has been established successfully.');
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
