// Requiring and configuring the .env file to access its variables 
require("dotenv").config();
// Requiring express
const express = require('express');
//Requiring mongoose
const mongoose = require('mongoose');
//connecting database
const databaseConfig = require('./config/db-connection');

// Creating the express server and storing inside the app variable
const app = express();
// Port in which the server will run on 
const PORT = process.env.PORT || 5000;

//Connect to MongoDB
mongoose.connect(databaseConfig.url, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

// Requiring routes
const productRoutes = require('./routes/productRoute');
const userRoutes = require('./routes/userRoute');
const searchRoutes = require('./routes/searchRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const hairstyleRoutes = require('./routes/hairstyleRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const middlewares = require('./middleware/errorMiddleware');


// Configuring the server to accept and parse JSON data.
app.use(express.json());

// Configuring the server to run the middleware
app.use(middlewares.middleware)

// Connecting the router to the server
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/search', searchRoutes);
app.use('/reviews', reviewRoutes);
app.use('/hairstyles', hairstyleRoutes);
app.use('/categories', categoryRoutes);


// Calling the listen function telling the server to listen on port 5000
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});