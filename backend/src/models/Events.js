const mongoose=require('mongoose')
const EventsSchema=new mongoose.Schema({
    type:String,
    lead_id:String,
    timestamp:String,
    metadata:String,
    processed:Boolean
})

module.exports=mongoose,model("Events",EventsSchema)