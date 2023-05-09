const express=require('express')
const router=express.Router()
const services=[
    {
        serviceName:"App Development",
        serviceCost:"18000",
        serviceDuration:"4 days"
    },
    {
        serviceName:"Web Development",
        serviceCost:"22000",
        serviceDuration:"3 days"
    },
    {
        serviceName:"Game Development",
        serviceCost:"36000",
        serviceDuration:"7 days"
    },
    {
        serviceName:"UI/UX Designing",
        serviceCost:"8000",
        serviceDuration:"2 days"
    },
    {
        serviceName:"Ethical Hacking",
        serviceCost:"24000",
        serviceDuration:"4 days"
    },
    {
        serviceName:"Blockchain Technology",
        serviceCost:"40000",
        serviceDuration:"5 days"
    }
]
router.get("/",(request,response)=>{
    response.send('List of Services')
})
router.post("/",(request,response)=>{
    services.push({serviceName:request.body.serName,serviceCost:request.body.serCost, serviceDuration:request.body.serDuration})
    response.redirect(`/service/${services.length}`)
})
router.get("/serviceform",(request,response)=>{
    response.render("services/newservice")
})
router.get("/:id([0-9]{1})",(request,response)=>{
    response.send(`Service name : ${request.service.serviceName} and  Service Cost is : ${request.service.serviceCost} and Service Duration is : ${request.service.serviceDuration}`)
})
router.param('id',(request,response,next,id)=>{
    request.service=services[id-1]
    next()
})
module.exports=router