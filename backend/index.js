const express=require('express')
const app=express()
app.use(express.json())
app.get('/',(req,res)=>{
    return res.send("Server running")
})
app.listen(4000,()=>{
    console.log("Running")
})