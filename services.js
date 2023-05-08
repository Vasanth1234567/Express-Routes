const express=require('express')
const router=express.Router()
const services=[
    {
        serviceName:"App Development"
    },
    {
        serviceName:"Web Development"
    },
    {
        serviceName:"Game Development"
    },
    {
        serviceName:"UI/UX Designing"
    },
    {
        serviceName:"Ethical Hacking"
    },
    {
        serviceName:"Blockchain Technology"
    }
]
router.get("/",(request,response)=>{
    response.send("This Is Service Page")
})
router.get("/:id([0-9]{1,3})",(request,response)=>{
    response.send(request.service.serviceName)
})
router.param('id',(request,response,next,id)=>{
    request.service=services[id-1]
    next()
})
module.exports=router