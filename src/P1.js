import React from "react";
import "./practice.css";
import "./Middle.css";
import profile from "./assets/profile.jpg";
import { NavLink, useNavigate } from 'react-router-dom';
import search from './assets/search.png';
import plus from'./assets/add.png';
import video from './assets/video.png'
import mail from "./assets/mail.jpeg"
import phone from "./assets/phone.jpeg"
import whatsapp from "./assets/whastapp.jpeg"
import home1 from './assets/home1.png'

  export const P1 = () => {

const  hi =(a)=>{}
//   switch (a) {
//     case 1:
//       window.location.href='tel:7397434270';
//       break;
//       case 2:
//         window.location.href = "mailto:rsurendar116@gmail.com";
//       break;
//       case 3:
//         window.open("https://wa.me/7397434270", "_blank", "noopener,noreferrer");
//       break;
  
//     default:
//       break;
//   }
// }



        const navigate = useNavigate(); 
  return (
<div className="middle">
    <div className="profile-container">
    
      <div className="profile-header">
        <img src={profile } alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h2>SURENDAR R  <h6>(Software developer)</h6></h2>
          
          <div className="profile-stats">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React JS</span>
            <span>Java</span>
            <span>My SQL</span>
          </div>
          <p className="profile-bio">
            I have Currently complteted Java Fullstack Development Cours, gaining the strong skill in Front-end and back-end technologies.With knowledge of <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>,<b>React.js </b>,<b>JAVA</b>,<b>MYSQL</b>.I am excited to start my career in development.My experience as an Ar caller has improved my communication and problum-solving skills.which will help me in a tech role. I am now actively looking for opportunities where i can learn grow and contribute to a great team.
          </p>
        </div>
      </div>

      <strong>Contact Info:</strong> 
      <div className="highlights">
        
        <div className="highlight" onClick={()=>hi(1)} ><img src={phone}  /></div>
        <div className="highlight"  onClick={()=>hi(2)}  ><img src={mail}/></div>
        <div className="highlight" onClick={()=>hi(3)} ><img src={whatsapp}/></div>
        <div className="highlight1">+</div>
      </div>

      {/* Posts Section */}
      <div className="posts-container">
        <img src="post1-url" alt="Post 1" className="post" />
        <img src="post2-url" alt="Post 2" className="post" />
        <img src="post3-url" alt="Post 3" className="post" />
      </div>
    </div>
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
                    <div className='assets'>
                        <img src={ profile } ></img>
                        
                    </div>
    
    
          </div>
    </div>
  );
};


