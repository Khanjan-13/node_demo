const mongoose = require('mongoose');

//Define Person Schema
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
    } ,
    age:{
        type:Number,
    },
    work:{
        type:String,
        enum:['worker','chef','waiter'],
        required: true,
    },
    mobile:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    }
});

// Create Model 
const Person = mongoose.model('Person',personSchema);
module.exports = Person;