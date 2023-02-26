const HttpError = require("../model/HttpError")
const user = require('../model/user')
const qr = require('qrcode')
const gym = require('../model/gym')
const mongoose = require('mongoose')

//add new user
const pushUser = async (req, res, next) => {
    const { name, email, password, height, weight, contact } = req.body
    let newUser = await user.findOne({ email })
    if (newUser) {
        res.send({ code: 400, message: "Already registered" })
        return next(new HttpError("User already registered"))
    }

    newUser = new user({
        name,
        email,
        password,
        height,
        weight,
        contact,
        gym:null
    })

    await newUser.save();
    res.json({ user: newUser, })
}

const genQr = async (req, res, next) => {
    const { id, name } = req.body
    data = { id }
    const stringData = JSON.toString(data)
    qr.toDataURL(stringData, (err, url) => {
        if (err)
            res.send("Error occured");
        // res.send("scan", { src });
        console.log(url)
    })
}

const registerGym = async (req, res, next) => {
    try {
        const { userId, gymId } = req.body
        let findGym

        findGym = await gym.findById(gymId)
        let findUser = await user.findById(userId)
        console.log(findUser)
        if (findGym) {
            console.log(findGym);
            findGym.customers.push(userId);
            findUser.gym=gymId
            await findUser.save()
            await findGym.save()
            res.send(findGym)
            console.log("worked")
        }
        // let findUser = await user.findById({userId})
        // findUser.gym
        // var id = mongoose.Types.ObjectId(userId);

        // await findGym.save()
        // res.send(findGym)
        // console.log("worked")}catch(err){

    } catch (err) {
        console.log(err)
    }

}

const getCustomer = async(req,res,next)=>{
    const {email,password} = req.body
    let findCustomer
    try{
        findCustomer =await user.findOne(email)
    }
    catch(err)
    {
        console.log(err)
        return next(new HttpError("Can't find registered user",400))
    }
    res.send(findCustomer._id)
}

exports.pushUser = pushUser
exports.genQr = genQr
exports.registerGym = registerGym
exports.getCustomer = getCustomer 