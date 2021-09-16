const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

router.get("/",(req,res,next)=>{
    res.send("this is the index page")
})




module.exports = router