const mongoose=require('mongoose')
const LeadsSchema=new mongoose.Schema({
    name:String,
    email:String,
    company:String,
    current_score:Number,
    status:String
})
module.exports=mongoose.model("Leads",LeadsSchema)