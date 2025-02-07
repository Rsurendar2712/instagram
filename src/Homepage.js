import React from 'react'
import { Rightbar } from './Rightbar'
import { Middle } from './Middle'
import { Left } from './Left'
import { NavLink } from 'react-router-dom';
import './App.css'


export const Homepage = () => {
  return (
    <div className='Home'>
      <Rightbar/>
     <Middle/>
        <Left/>      
    </div>
  )
}
