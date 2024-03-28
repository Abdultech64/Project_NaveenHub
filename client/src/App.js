import React, { createContext,  useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import './index.css';
import Students from './pages/Students';
// import LoginPage from './pages/LoginPage';

// import RegisterFom from './pages/RegisterFom';
import MyProfile from './pages/MyProfile';
import LoginPage from './pages/Loginpage';
import RegisterFom from './pages/RegisterForm';

export const store = createContext("null");


 const App = () => {

  const [token,setToken]=useState(null);

  return (
  <>
  
 <store.Provider value={[token,setToken]} >
 <BrowserRouter>
  <Navbar />
  <Routes>

    <Route  path="/" element={<Students />}/>
    <Route  path="/contact" element={<Contact />}/>
    <Route path='/loginpage' element={<LoginPage/>}/>
    <Route path='/register' element={<RegisterFom/>}/>
    <Route path='/myprofile' element={<MyProfile/>}/>

   </Routes>
  </BrowserRouter>
 </store.Provider>
  
   
  </>
  )
}

export default App