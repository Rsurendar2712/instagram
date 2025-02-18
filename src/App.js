import React from 'react';
import {Rightbar} from './Rightbar'
import{Routes,Route} from "react-router-dom"
import { Signin} from './Signin';
import { Getvalues } from './Getvalues';
import { Login } from './Login'
import  './App.css'
import { Homepage } from './Homepage';
import {Profile} from './profile';
import { Story} from './Story';
import Pal from './P1';
import { Practice } from './Practice';


 const App= () => { 
  return (
       <div>
            <Routes>
  <Route path="/instagram" element={<Login />} />
  <Route path="/signin" element={<Signin />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/homepage" element={<Homepage />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/Story" element={  <Story/>} />
</Routes>





            </div>
  )
}

export default App;