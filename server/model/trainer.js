const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const trainerSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique: true
    },
    password:{
        type:String,
        require:true
    },
    height:{
        type:Number,
        require:true
    },
    weight:{
        type:Number,
        require:true
    },
    gym:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'Gym'
    }
})

userSchema.plugin(uniqueValidator);

const trainer = mongoose.model('Trainer',userSchema)
module.exports  = user