import React from 'react';
import {Rightbar} from './Rightbar'
import{Routes,Route} from "react-router-dom"
import { Signin} from './Signin';
import { Getvalues } from './Getvalues';
import { Login } from './Login'
import  './App.css'
import { Homepage } from './Homepage';
import {Profile} from './profile';

import Pal from './P1';
import { Practice } from './Practice';


 const App= () => { 
  return (
<Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Homepage" element={<Homepage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
)
};
export default App;

