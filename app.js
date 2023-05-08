const express=require('express')
const app=express()
const users=require('./users.js')
const about=require('./aboutus.js')
const contactus=require('./contactus.js')
const service=require('./services.js')
app.get("/",(request,response)=>{
    response.send("This is Home Page");
})
app.use("/users",users)
app.use("/aboutus",about)
app.use("/contactus",contactus)
app.use("/service",service)
app.listen(3500)