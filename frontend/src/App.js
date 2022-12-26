
import './App.css';
import Home from './Pages/Home'
import Navbar from './Components/Navbar';
import Login from './Pages/Login'
import { useState } from 'react';
import { Routes, Route,useNavigate } from "react-router-dom"
import User_Profile from './Pages/User_Profile'
function App() {
  const [dark, setDark] = useState(false)
  const [user, setUser] = useState({})//initially user object is empty
  
 
  return (

    <div className={`${dark ? "dark" : ""} App h-[100vh]`}>
      <div className='dark:bg-dkbg_main min-h-[100vh]  bg-litbg '>
        <Navbar darkMode={dark} setDarkMode={setDark} user={user} setUser={setUser} />
        <Routes>
          <Route exact path='/home' element={<Home user={user} setUser={setUser} />}></Route>
          <Route exact path='/' element={<Login user={user} setUser={setUser} />} />
          <Route exact path="/user/:id" element={<User_Profile user={user} setUser={setUser} />}></Route>
        </Routes>
      </div>
    </div>

  )
}

export default App;
