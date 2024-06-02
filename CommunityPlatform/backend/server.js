// app.js or server.js

const express = require('express');
const connectDB = require('./db');
const eventRoutes = require('./routes/eventRoutes');
const complaintRoutes = require('./routes/complaintRoutes');
const authRoutes = require('./routes/authRoutes'); 
const forumRoutes = require('./routes/forumRoutes'); 
const profileRoutes = require('./routes/profileRoutes'); 
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
// app.use(express.json());


// Routes
app.use('/api/events', eventRoutes);
app.use('/api/complaints', complaintRoutes);
app.use('/api/auth', authRoutes); 
app.use('/api/forum', forumRoutes); 
app.use('/api/profile', profileRoutes); 

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => res.send('API is running...'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
