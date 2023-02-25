const HttpError = require("../model/HttpError")
const gym = require('../model/gym')

//getting all gyms records in database
const getShortGymDetail = async(req,res,next)=>{
    let gymData
    try{
        gymData = await gym.find()
    }catch(err)
    {
        console.log(err)
    }
    res.json({gyms: gymData.map(data=>{
        data.toObject({getter:true})
    })})
}

//adding new gym data
const pushGym = async(req,res,next) => {
    const {name,gymname,email,password,registrationFee,monthlyFee,contact,address} = req.body

    let newGym = await gym.findOne({email})
    if(newGym)
    {
        res.send({code:400,message:"Already registered"})
        return next(new HttpError("User already registered"))
    }
    
    newGym = new gym({
        name,gymname,email,password,registrationFee,monthlyFee,contact,address,
        trainer:[]
    })

    await newGym.save();
    res.json({user:newGym})
}

//showing customers related to one gym
const getAllCustomer = async(req,res,next)=>{
    const pid = req.params.pid
    try{
    const gymcustomer = await gym.findById({pid}).populate('customers')
    }
    catch(err)
    {
        console.log(err)
        return next("Error fetching all customers",400)
    }

    if(!gymcustomer || gymcustomer.length==0)
    {
        return next("Error fetching all customers",400)
    }
    res.json({customer: gymcustomer.map(customer=>{
        customer.toObject({getter:true})
    })})

}

const gymSelectButton = async(req,res,next)=>{

}

exports.pushGym = pushGym
exports.getAllCustomer = getAllCustomer
exports.getShortGymDetail = getShortGymDetail
