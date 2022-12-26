import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const User_Profile = ({ user, setUser, Darkmode, setDarkMode }) => {
    const { email, name, imageUrl, googleId } = user


    return (
        <div className='flex items-center justify-center  h-auto mt-[20px] '>
            <div style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} className='shadow-lg dark:bg-gray-100 bg-gray-100 relative  w-[300px] h-[400px] rounded-lg flex flex-col justify-start items-center gap-6'>
                <div className='h-[200px] w-full'>
                <img  src={"https://source.unsplash.com/random/300x200"}  alt="" /> 
                </div> 
                <img className='rounded-full  absolute top-[38%] left-[50%] translate-x-[-50%] '  src={imageUrl} referrerPolicy="no-referrer"></img>
                <div className='mt-9 flex flex-col items-center justify-between gap-3'>
                <h1 className='font-bold text-xl dark:text-dk_red text-lit_red' >{name}</h1>
                <h1 className='font-bold text-xl dark:text-dk_red text-lit_red'> {email}</h1>
                </div>
            </div> 
        </div>
    )
}

export default User_Profile