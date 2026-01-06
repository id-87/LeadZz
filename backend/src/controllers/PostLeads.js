const Leads=require('../models/Leads')
async function PostLead(req,res){
    const{name,email,company,current_score,status}=req.body
    const resp=await Leads.create({name,email,company,current_score,status})
}
module.exports=PostLead