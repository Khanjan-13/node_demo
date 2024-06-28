const mongoose = require('mongoose');

// Define MongoDB Connection URL
const mongoURL = 'mongodb://127.0.0.1:27017/demo'

// Setup Connection
mongoose.connect(mongoURL)

// Get Default Connection 
const db = mongoose.connection;

// Define Some Event Listeners to check connection
db.on('connected',()=>{
    console.log('Connected to MongoDB Server');
}) 

db.on('error',()=>{
    console.log('Error in Connecting to MongoDB Server');
})

db.on('disconnected',()=>{
    console.log('Disconnected from MongoDB Server');
})

//Export Database Connection
module.exports = db;