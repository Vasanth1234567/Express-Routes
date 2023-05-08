const express=require('express')
const router=express.Router()
router.get("/",(request,response)=>{
    response.send("This Is Users Page")
})
module.exports=router