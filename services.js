const express=require('express')
const router=express.Router()
const services=[
    {
        id:1,
        serviceName:"App Development"
    },
    {
        id:2,
        serviceName:"Web Development"
    },
    {
        id:3,
        serviceName:"Game Development"
    },
    {
        id:4,
        serviceName:"UI/UX Designing"
    },
    {
        id:5,
        serviceName:"Ethical Hacking"
    },
    {
        id:6,
        serviceName:"Blockchain Technology"
    }
]
router.get("/",(request,response)=>{
    response.send("This Is Service Page")
})
router.get("/:id([0-9]{1,3})",(request,response)=>{
    const id=Number(request.params.id)
    const serviceId=services.find((service)=>service.id===id)
    if(!serviceId){
        response.send("Service Not Found")
    }
    else{
        response.send(serviceId.serviceName)
    }
})
module.exports=router