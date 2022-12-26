const express=require("express")
const Note=require("../Modals/Notes")
const router=express.Router()
router.post("/",async (req,res)=>{
    const data= await Note.find({googleId:req.body.googleId})
   
    if(data.length==0)
    {
        const data=new Note({
            googleId:req.body.googleId,
            Notes:{Note:req.body.Note,Title:req.body.Title},
            
        })
        data.save();
        res.send("Note saved")
        
    }else{
       const result= await Note.find({googleId:req.body.googleId})//getting all the notes
       let notes=result[0].Notes;//simplification
       let flag=0;//flag to control the condition

       //checking the notes if there already exists one with title user is adding
       notes.forEach((note)=>{
            if(note.Title.toLocaleLowerCase().trim()==req.body.Title.toLocaleLowerCase().trim())
                flag=1;//if found make flag 1
        })
        //if not duplicate adding the note array 
        if(flag==0)
        {
            const result=await Note.updateOne({googleId:req.body.googleId},{
                $set:{
                    Notes:[...notes,{Title:req.body.Title,Note:req.body.Note}]
                }
            }) 
            res.send("Note saved")
        }
        else{
            res.send("Note already exits")
        }
        
    }

})

module.exports=router