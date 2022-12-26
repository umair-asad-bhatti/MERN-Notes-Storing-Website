import React,{ useState,useEffect} from 'react'
import Note from '../Components/Note'
import axios from 'axios'
import  Masonry from 'react-masonry-css'
import './masonry.style.css'
import {BiSearchAlt} from 'react-icons/bi'
const Home = ({user}) => {
    
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };
    const [note,setNote]=useState("")
    const [title,setTitle]=useState("")
    const [status,setStatus]=useState("")
    const [allNotes,setAllNotes]=useState([])
    const [search,setSearch]=useState("")
    
    const handleSubmit=async (e)=>{
        e.preventDefault()
        if(note.length==0 || title.length==0)
        {
            alert("Title and Note must be provided..")
            return;
        }
        const result=await axios.post("http://localhost:1234/save_note",{googleId:user.googleId,Note:note,Title:title})
        setStatus(result.data)
        setNote("")
        setTitle("")
        setTimeout(() => {
            setStatus("")
        }, 3000);
        fetchNotes()//refresh the notes whenever user enters new note
    }

    //Fetching notes to display
    const fetchNotes=async ()=>{
        const result=await axios.post("http://localhost:1234/get_notes",{User:JSON.parse(localStorage.getItem("User"))})
        setAllNotes(result.data)

    }
    // Display all notes on first render 
    
    useEffect(()=>{
        fetchNotes()
      
    },[])
    let filteredArray=allNotes.filter(note=>{
        const {Title}=note;
        return Title.toLowerCase().includes(search.toLowerCase())
    })
    
    return (
        <> 
        <div className='home-container flex flex-col gap-3 items-center justify-center h-[80vh]'>
           <h1 className='text-4xl dark:text-dk_white text-lit m-4'>Lets add some notes</h1>
            <h1 className='dark:text-dk_white font-bold'>User Name <span className="dark:text-dk_red text-lit_red">{user.name}</span>    </h1>
            <h1 className='dark:text-dk_white font-bold'>Email <span className="dark:text-dk_red text-lit_red">{user.email}</span>    </h1>
            <h1 className='dark:text-dk_white font-bold flex items-center justify-center md:flex-row flex-col'><span>Add Title</span> <input value={title} onChange={e=>setTitle(e.target.value)} style={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}} type="text" className='border-none outline-none font-normal p-1 px-2 rounded-md text-black ml-2'  /></h1>
            <textarea type="text" value={note} onChange={e=>setNote(e.target.value)} className="border-none outline-none p-5 rounded-md w-[80%] min-h-[200px]" style={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}} />
            <button onClick={handleSubmit} style={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}} type="submit" className="bg-lit_red dark:bg-dk_red px-4 py-1 text-dk_white  rounded-md ">Add Note</button>
            <div className="dark:text-dk_red h-[30px] w-[200px]  text-center text-lit_red">{status}</div> 
        </div>
        <div>
        <h1 className='px-4 dark:text-dk_white flex justify-center items-center font-semibold text-2xl'>Your Notes</h1>

        </div>
        <div  className='my-3 flex items-center justify-center gap-2'><h1 className='dark:text-dk_white text-lit'>Search Note</h1>
        <div className='dark:text-lit gap-1 text-white flex items-center justify-center dark:bg-litbg bg-lit_red px-3 py-1 rounded-md'>
        <BiSearchAlt size={20}/>
        <input className='border-none bg-transparent outline-none' value={search} onChange={(e)=>setSearch(e.target.value)} type="text" name="search" id="search" />
        </div>
        
        </div>
        <div>
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid p-3"
        columnClassName="my-masonry-grid_column">
        {
            filteredArray.length>0? 
            filteredArray.map((note,index)=>{

               return <Note fetchNotes={fetchNotes} key={index} title={note.Title} note={note.Note}/>
               
            }):<div className='flex items-center justify-center w-[100vw]'><h1 className='dark:text-dk_white text-lit '>No Notes Available</h1></div> 
        }
        </Masonry>
        </div>
        
        
        
        </>
    )
}

export default Home