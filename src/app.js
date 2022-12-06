const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/UserRoutes');
const authRoutes = require('./routes/AuthRoutes');
const forgetPassRoute = require('./routes/ForgetPasswordRoute');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser());

app.use('/user', userRoutes);
app.use('/auth', authRoutes);
app.use('/forgetpass', forgetPassRoute);

module.exports = app;