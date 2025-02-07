import React from 'react'
import logo1 from './assets/logo1.png'
import home1 from './assets/home1.png'
import social from './assets/social.png'
import video from './assets/video.png'
import more from './assets/more.png'
import heart from './assets/heart.png'
import messenger from './assets/messenger.png'
import search from './assets/search.png'
import menu from './assets/menu.png'
import profile from "./assets/profile.jpg";
import { NavLink } from 'react-router-dom';
import  './Rightbar.css'
export  const Rightbar = () => {
   return (
    
    <div className='Rightbar'>
          <div className='logo'>
                  <img src={logo1}></img>
          </div>
          
          <div className='navbar'>
            <NavLink to="/Homepage" style={{ textDecoration: "none" }}>
                        
                <div className='home' id='navicon'>
                      <div className='assets'>
                           <img src={home1}></img>
                       </div>
                       <div className='textr'>
                  <p>Home  </p>
                     </div>
                       
               
                 </div>
                 </NavLink>

                <div className='search'id='navicon'>
                    <div className='assets'>
                       <img src={search}></img>
                    </div>
                    <div className='textr'>
                    <p>  Search     </p>
                     </div>
                </div>

                <div className='expole'id='navicon'>
                     <div className='assets'>
                        <img src={social}></img>
                     </div>
                     <div className='textr'>
                    <p>Explore</p>
                     </div>
              </div>
              <div className='real'id='navicon'>
                     <div className='assets'>
                           <img src={video}></img>
                     </div>
                     <div className='textr'>
                     <p>

                     Reels
                     </p>

                     </div>
              </div>
              <div className='meassages'id='navicon'>
                     <div className='assets'>
                         <img src={messenger}></img>
                     </div>
                     <div className='textr'>
                     <p>

                   Messages
                     </p>

                     </div>
              </div>
              <div className='notification'id='navicon'>
                     <div className='assets'>
                         <img src={heart}></img>
                     </div>
                     <div className='textr'>
                     <p>

                    Notifications
                     </p>

                     </div>
             </div>
             <div className='create'id='navicon'>
                    <div className='assets'>
                      <img src={more}></img>
                    </div>
                    <div className='textr'>
                    <p>

                    Create
                    </p>

                     </div>
             </div>
             <NavLink to="/Profile" style={{ textDecoration: "none" }}>
             <div className='profile'id='navicon'>
                   <div className='assets' >
                   <img src={profile}></img>

                   </div>
                   <div className='textr'>
                   <p>

             Profile
                   </p>

                     </div>
           </div>
           </NavLink>
           <div className='more'>
              <div className='assets'  >
                   <img src={menu}   ></img>

                   </div>  
                   <div className='textr'>

                  <p>More</p>
                   </div>
              </div>
          </div>
    </div>
  
)
}
