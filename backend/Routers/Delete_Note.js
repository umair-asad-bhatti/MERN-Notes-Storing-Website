const express=require("express")
const router=express.Router()
const Note=require('../Modals/Notes')
router.post('/',async (req,res)=>{
   
    const result=await Note.find({"googleId":req.body.googleId})
    const AllNotes=result[0].Notes
    AllNotes.map((note,index)=>{
        if(note.Title==req.body.Title)
            AllNotes.splice(index,1)
           
    })
    const final_result=await Note.updateOne({googleId:req.body.googleId},{
        $set:{
            Notes:[...AllNotes]
        }
    }) 
    res.send("Deleted")
    
})
module.exports=router