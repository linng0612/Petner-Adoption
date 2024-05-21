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


app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173' 
}));


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

app.use(express.json());


connectDatabase();

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
});


app.use('/api/adopt', animalRoute);
app.use('/api/user', userRoute);
app.use('/api/application', applicationRoute);
app.use('/api/category', categoryRoute);

app.use('/api', donateRouter);
app.get('/', (req, res) => {
    res.send('API is running');
  });


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
