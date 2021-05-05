 const mongoose = require('mongoose');
 require('dotenv').config();
 const { dbURI } = process.env;
 
 //Async mongoose connection
 const connectDB = async () => {
     try {
         await mongoose.connect(dbURI, {
             useNewUrlParser: true,
             useCreateIndex: true,
             useUnifiedTopology: true,
             useFindAndModify: false
         })
 
         console.log('MongoDB connected...');
 
         //send data
     } catch (error) {
         console.error(err.message);
 
         //Exit with failure
         process.exit();
     }
 }
 
 module.exports = connectDB;