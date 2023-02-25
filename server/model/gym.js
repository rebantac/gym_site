const mongoose = require('mongoose')

const gymSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    gymname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },    
    registrationFee:{
        type:String,
        required:true
    },
    monthlyFee:{
        type:String,
        require:true
    },
    contact:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    customers:{
        type:[{type:mongoose.Types.ObjectId}],
        // required:true,
        // ref:'User'
    },
    trainers:{
        type:[{type:mongoose.Types.ObjectId}],
        // required:true,
        // ref:'Trainer'
    },

})

module.exports = mongoose.model('Gym',gymSchema)