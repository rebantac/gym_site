const HttpError = require("../model/HttpError")
const gym = require('../model/gym')

//getting all gyms records in database
const getGymId = async(req,res,next)=>{
    const {email,password} = req.body
    // console.log(email)
    let findGym
    try{
        findGym = await gym.findOne({email:email})
        // console.log("find")
    }
    catch(err)
    {
        console.log(err)
        return next(new HttpError("Can't find registered user",400))
    }
    console.log(findGym)
    res.send({id:findGym.id})
}

const getShortGymDetail = async(req,res,next)=>{
    let gymData
    try{
        gymData = await gym.find({})
    }catch(err)
    {
        console.log(err)
    }
    // res.json({gyms: gymData.map(data=>{
    //     data.toObject({getter:true})
    // })})
    res.send({data:gymData})
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

const getGymById = async(req,res,next)=>{
    const {id} = req.body
    let gymData
    try{
        gymData = await gym.findById({_id:id})
    }
    catch(err)
    {
        console.log(err)
    }
    console.log(gymData)
    res.send(gymData)
}

exports.pushGym = pushGym
exports.getAllCustomer = getAllCustomer
exports.getShortGymDetail = getShortGymDetail
exports.getGymId = getGymId
exports.getGymById = getGymById