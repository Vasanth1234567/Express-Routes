const express=require('express')
const router=express.Router()
router.get("/",(request,response)=>{
    response.send("This Is Contact Us Page")
})
module.exports=router