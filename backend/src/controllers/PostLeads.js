const Leads=require('../models/Leads')
const { Queue } = require('bullmq')
const IORedis = require('ioredis')

const connection = new IORedis({
  host: 'localhost',
  port: 6379
})

const eventQueue = new Queue('event-queue', {
  connection
})



async function PostLead(req,res){
    const{name,email,company,current_score,status}=req.body
    const resp=await Leads.create({name,email,company,current_score,status})
}
module.exports=PostLead