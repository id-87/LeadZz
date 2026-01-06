const mongoose=require('mongoose')
const ScoreHistorySchema=new mongoose.Schema({
    lead_id:String,
    score:Number,
    timestamp:String,
    reson:String
})
module.exports=mongoose.model("ScoreHistory",ScoreHistorySchema)