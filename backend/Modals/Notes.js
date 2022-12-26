const mongoose=require("mongoose")
const NotesSchema=new mongoose.Schema({
    googleId:'Number',
    Notes:[{Title:"String",Note:"String"}]

})
module.exports=mongoose.model("Notes",NotesSchema)