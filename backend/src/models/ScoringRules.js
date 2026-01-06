const mongoose=require('mongoose')
const ScoringRulesSchema=new mongoose.Schema({
    event_type:String,
    points:Number
})
module.exports=mongoose.model("ScoringRules",ScoringRulesSchema)