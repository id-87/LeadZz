const Leads=require('../models/Leads')
async function FindLeads(req,res){
    const resp=await Leads.find()
    return res.status(200).send(resp)

}
module.exports=FindLeads