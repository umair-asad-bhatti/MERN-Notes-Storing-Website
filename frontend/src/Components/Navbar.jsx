import React, { useEffect } from 'react'
import { CiLight } from 'react-icons/ci'
import { CiDark } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { MdLogout } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
const Navbar = ({ darkMode, setDarkMode, user, setUser }) => {
    const Navigate = useNavigate();
    const handleLogout = () => {
        console.log("logour");
        localStorage.removeItem("User")
        setUser(null)
        Navigate("/")
    }
    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("User")))

    }, [])
    return (
        <div className='dark:bg-dkbg shadow-md  bg-litbg w-full flex justify-between items-center p-3 dark:text-dk_white text-lit'>

            <div className='w-[30%]  md:block hidden font-bold' >
                Save Your Notes
            </div>
            <div className='md:w-[50%] w-full'>
                <ul className='flex w-full justify-between items-center '>

                    {
                        user &&
                        <button className='flex items-center justify-center gap-3 ' onClick={handleLogout}>Logout<MdLogout /></button>
                    }
                    {
                        user &&
                        <li><Link className='flex items-center justify-center gap-2' to={"/home"}><AiOutlineHome /><span>Home</span></Link></li>
                    }
                    {
                        user &&
                        <li><Link className='flex items-center justify-center gap-2' to={`/user/${user.googleId}`}><span>Profile</span><BiUser /></Link></li>
                    }



                    <button onClick={handleDarkMode} className="">
                        {

                            darkMode ?
                                <CiLight size={28} />
                                : <CiDark size={28} />
                        }</button>
                </ul>

            </div>

        </div >
    )
}

export default Navbar