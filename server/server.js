const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const animalRoute = require('./routes/animalRoute');
const userRoute = require('./routes/userRoute');
const applicationRoute = require('./routes/applicationRoute');
const categoryRoute = require('./routes/categoryRoute');
const connectDatabase = require('./config/database');
const app = express();
const donateRouter = require('./config/donate');

//middleware
app.use(cors());
app.use(express.json());

//connect to database
connectDatabase();


//global error handler
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
});

//routes
app.use('/api/adopt', animalRoute);
app.use('/api/user', userRoute);
app.use('/api/application', applicationRoute);
app.use('/api/category', categoryRoute);

app.use('/api', donateRouter);
app.get('/', (req, res) => {
    res.send('API is running');
  });

//server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
