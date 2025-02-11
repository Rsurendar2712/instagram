import React from 'react';
import './Middle.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import profile from "./assets/profile.jpg";
import search from './assets/search.png';
import plus from'./assets/add.png';
import video from './assets/video.png'
import chart from './assets/chat.png'
import send from './assets/send.png'
import home1 from './assets/home1.png'

// import menu from './assets/menu.png'

import {reels} from './Reels'



// --------------------------------------------------------------------------------------------------------------



  export const Middle = () => {
    const navigate = useNavigate(); 



     const hi=(id)=>{
<<<<<<< HEAD
      alert("hi");
=======
       switch (id) {
        case 1:
      window.open('http://www.linkedin.com/in/surendar-r-50099721a');
        break;
        case 2:
       window.open('https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-menu-homepage');
        break;
        case 3:
       window.open('https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-menu-homepage');
        break;
        case 4:
       window.open('https://github.com/Rsurendar2712');
        break;

        default:
         break;
      }
>>>>>>> eaf29eb5a62bb93ab4cc934e0b00786b867430a5
       }

  

  const [like, setlike] = useState(reels);
  const likeImage = (id) => {
        setlike((prevlike) =>
          prevlike.map ((value) =>
            value.id == id ?  {...value, isliked : !value.isliked}  :value 
          ))};
const bookmarkimage = (id) => {

 
  setlike((prevbok) =>
    prevbok.map ((value) =>
      value.id == id ?  {...value, isbook : !value.isbook}  :value 
 
    )
  )


  
};
  return(
    <div className='middle'>
    
            <div className='story'>
            {like.filter((value)=>value.id===0).map((value,id)=>(   
               <div className='story1 'id='own'>
                     <div className="storyimg">
                           <img src={value.story} /> 
                      </div>
                      <div className='add' >
                                  +
                      </div>
                </div>
))}

{like.filter((value)=>(value.story && value.id>0)).map((value, id) => (
               <div className='story2'>
                
                      <div className="storyimg">
                            <img src={value.story} alt={value.title} onClick={()=>hi(value.id)} />
                      </div>
                      <div className="inid">
  <p>{value.title.length > 10 ? `${value.title.slice(0, 10)}.` : value.title}</p>
</div>
                  
                       </div>
                       

                       ) )};
          </div>
          {/* --------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          {like.map((value, id) => (
            <div className='video'>
           
                            <div className='videotop' key={id}>
                               <div className='ime' key={id}>
                                    <img src={value.img}></img>
                                </div>
                                <div className='instid' key={id}>           
                                         {value.page}. <h>1h</h>
                                </div>
                            </div>
                            <div className='videocon' key={id} onDoubleClick={()=>likeImage(value.id)}>
{value.type ==="image" ? <img src={value.vid}/>:<video  controls src={value.vid}/> }
                            
                           
                            

                            </div>
                            <div className='videobottum' key={id}>
                             <div className='bi1'>
                                   <div className='like' key={id} >
                                      <div className='likeof' >
                                        <img src={value.isliked ? value.like :value.liked }  onClick={()=>likeImage(value.id)} 
                                          alt={value.isliked ? "Liked" : "Like"} 
                                          style={{ cursor: "pointer" }}/>
                                  
                                      </div>
                                        
                                       
                                  </div>
                                  <div className='chart'>
                                       <img src={chart}/>
                                  </div>
                                  <div className='send'>
                                         <img src={send}></img>
                                  </div>
                           </div>

                           <div className='bi2' onClick={bookmarkimage} >
                                    <img src={value.isbook ? value.book :value.bookd }  onClick={()=>bookmarkimage(value.id)}/>
                            </div>

                               
                   </div>
                   <p>Liked by<strong>{value.command}</strong></p>
                   <v>View all 70 comments</v><br/>
                   <v> Add a comment…</v>
            </div>
          ))}

<div className='navbarm'>
            <NavLink to="/Homepage"> <div className='assets'>
                    <img src={home1}></img>
             </div></NavLink> 
             <div className='assets'>
                    <img src={search}></img>
             </div>
            <div className='assets'  >
                  <img src={plus}   ></img>
             </div>  
               <div className='assets'>
                    <img src={video}></img>
                </div>

                <NavLink to="/profile">
                <div className='assets'>
                    <img src={profile}></img>
                </div>
                </NavLink>


      </div>
         
    
    </div>
  )
};




