const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const connectDB = require('./config/db');
const LandingPageRoute = require('./routes/LandingPageRoute');
require('dotenv').config();

const app = express();


connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/landing', LandingPageRoute);

module.exports = app;