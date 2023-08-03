// MongoDB Connection Setup
const mongoose = require('mongoose');

const connectToDB = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/blackcoffer'
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

}
module.exports=connectToDB