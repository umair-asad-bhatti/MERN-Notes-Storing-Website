import React from 'react'
import {GoNote} from 'react-icons/go'
import {FaRegTrashAlt} from 'react-icons/fa'
import axios from 'axios'
const Note = ({title,note,fetchNotes}) => {
  const handleDelete=async ()=>{
      const result=await axios.post("http://localhost:1234/delete_note",{"Title":title,"googleId":JSON.parse(localStorage.getItem("User")).googleId})
      fetchNotes()
  }
  return (
  
    <div
    style={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}} 
    className=' border-red-400 max-w-[300px] break-words  border-[2px]  rounded-lg p-2 flex flex-col  text-lit dark:text-dk_white'>
        <div className='flex w-full items-center justify-start  gap-1'>
        <h1 className='w-[40px] h-[40px] flex items-center justify-start' style={{borderRadius:"50%"}}><GoNote size={25}/></h1>
        <h1 className='text-lg font-bold'>{title}</h1>
        </div>
        <div className='flex flex-col gap-4'>
        <p>{note}</p>
        <FaRegTrashAlt onClick={handleDelete} className='cursor-pointer' size={20}/>
        </div>
        
    </div>
  )
}

export default Note