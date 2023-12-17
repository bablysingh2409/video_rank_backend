// app.js
const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');
const videoRoutes = require('./routes/videoRoutes');
const callbackRoutes = require('./routes/callbackRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/VideoCollection', { useNewUrlParser: true, useUnifiedTopology: true });


app.use('/video', videoRoutes);
app.use('/callback', callbackRoutes);

module.exports = app;
 