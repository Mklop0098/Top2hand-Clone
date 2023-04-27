const express = require('express')
const router = express.Router()
const User = require("../models/User")
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

router.post('/register', async(req, res) => {
    const {username, password} = req.body
    if (!username || !password) 
        return res
            .status(400)
            .json({success: false, message: 'Missing'})

    try {
        const user = await User.findOne({username})
        if (user) {
            return res
            .status(400)
            .json({success: false, message: 'Username Already exist'})

        }
        
        const hashedPassword = await argon2.hash(password)
        const newUser = new User({username, password: hashedPassword})
        await newUser.save()

        const accessToken = jwt.sign({userId: newUser._id}, process.env.ACCESS_TOKEN_SECRET)
        res.json({success: true, message: 'user create successfully', accessToken})
    } catch (error) {

         
    }
})


module.exports = router