// Requiring and configuring the .env file to access its variables 
require("dotenv").config();
// Requiring express
const express = require('express');
// Creating the express server and storing inside the app variable
const app = express();
//Requiring mongoose
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

//connecting database
const dbConnection = require('./config/db-connection');
const MONGO_URI= 'mongodb+srv://chanelc004:TpnRX5HKx4tM4Xvj@mongopractice.31wnwa8.mongodb.net/CutClickCap?retryWrites=true&w=majority';

// Port in which the server will run on 
const PORT = process.env.PORT || 5000;

// Requiring routes
const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');
const searchRoute = require('./routes/searchRoute');
const reviewRoute = require('./routes/reviewRoute');
const hairstyleRoute = require('./routes/hairstylesRoute');
const categoryRoute = require('./routes/categoryRoute');

const errorMiddleware = require('./middleware/errorMiddleware');

// Configuring the server to accept and parse JSON data.
app.use(express.json());

// Configuring the server to run the middleware
app.use(errorMiddleware);

// Connecting the router to the server
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/search', searchRoute);
app.use('/reviews', reviewRoute);
app.use('/hairstyles', hairstyleRoute);
app.use('/categories', categoryRoute);


// Calling the listen function telling the server to listen on port 5000
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});