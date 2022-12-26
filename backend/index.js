const express=require('express')
const cors=require('cors')
const mongoose=require("mongoose")
const Put_Note=require("./Routers/Put_Note")
const Get_Notes=require("./Routers/Get_Notes")
const Delete_Note =require("./Routers/Delete_Note")
require("dotenv").config()
const app=express()
app.use(cors())
app.use(express.json())
//middleware
app.use("/save_note",Put_Note)
app.use("/get_notes",Get_Notes)
app.use("/delete_note",Delete_Note)
//database connection
mongoose.connect(process.env.PATH_TO_DB)

app.listen(process.env.PORT || 99,()=>{
    console.log(process.env.PORT || 99);
})