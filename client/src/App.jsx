import { useState } from 'react'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './navbar'
function App() {



  return (
   <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path="/cart" element={<Cart />} />
      <Route path="/create" element={<CreateUser/>}/>
      <Route path="/update" element={<UpdateUser/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
