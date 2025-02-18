import React, { useState } from "react";
import "./Story.css";
import { reels } from "./Reels";
import { NavLink, useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import heart from './assets/heart.png'
import send from './assets/send.png'
import logo1 from "./assets/logo1.png";
import chart from './assets/chat.png'

export const Story = () => {
  const location = useLocation();
  const receivedId = location.state?.id || 2
  const [like, setLike] = useState(reels);




  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [inde, setIndex] = useState(receivedId);

  const hi = (id, index) => {
 setIndex(id)

// if(id==0){
//   setIndex(null)
// }
// if((index.lenght)-1==id){
//   setIndex(null)
// }



  };


return (
  <div className="containerss">

<div className="laptopview">

<div className="top">
      
      <div>
        <img src={logo1} alt="Logo" />
      </div>
      <div ><NavLink to="/homepage" style={{ textDecoration: "none" }}>✖</NavLink></div>
    </div>

    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }} className="lapView">
      
    <div className="storyitemsmal">
      
    {like.slice(inde-2, inde-1).map((img, index) => (
      
        
      img.type === "image" ? (
        <img
          key={img.id}
          src={img.vid1}
          alt={`Image ${img.id}`}
          onClick={() => hi(img.id, index)}
        />
      ) : (
        <video
          key={img.id}
          src={img.vid1}
          onClick={() => hi(img.id, img.index)}
         />
        
      )
  
      
    ))}
    </div>
    <div className="storyitemsmall">
    {like.slice(inde-1, inde).map((img, index) => (
      
        
      img.type === "image" ? (
        <img
          key={img.id}
          src={img.vid1}
          alt={`Image ${img.id}`}
          onClick={() => hi(img.id, index)}
        />
      ) : (
        <video
          key={img.id}
          src={img.vid1}
          onClick={() => hi(img.id, img.index)}
         />
        
      )
  
      
    ))}
    </div>
    <div className="storyitemlarge">
    {like.slice(inde, inde+1).map((img, index) => (
      
        
      img.type === "image" ? (
        <img
          key={img.id}
          src={img.vid1}
          alt={`Image ${img.id}`}
          onClick={() => hi(img.id, index)}
        />
      ) : (
        <video
          key={img.id}
          src={img.vid1}
          onClick={() => hi(img.id, img.index)}
          controls />
        
      )
  
      
    ))}
    </div>
    <div className="storyitemsmall">
    {like.slice(inde+1, inde+2).map((img, index) => (
      
        
      img.type === "image" ? (
        <img
          key={img.id}
          src={img.vid1}
          alt={`Image ${img.id}`}
          onClick={() => hi(img.id, index)}
        />
      ) : (
        <video
          key={img.id}
          src={img.vid1}
          onClick={() => hi(img.id, img.index)}
          />
        
      )
  
      
    ))}
    </div>
    <div className="storyitemsmal">
    {like.slice(inde+2, inde+3).map((img, index) => (
      
        
      img.type === "image" ? (
        <img
          key={img.id}
          src={img.vid1}
          alt={`Image ${img.id}`}
          onClick={() => hi(img.id, index)}
        />
      ) : (
        <video
          key={img.id}
          src={img.vid1}
          onClick={() => hi(img.id, img.index)}
         />
        
      )
  
      
    ))}
    </div>
      
    </div>
    </div>



    <div className="mobile_view">
      {like.slice(inde,inde+1).map((img, index) => (
      <div className="topstoyin">
     <div> <img src={img.story}/></div>
     <div><p>{img.title}</p></div>
     <div></div>
      </div>
      ))}
{like.slice(inde,inde+1).map((img, index) => (
        
          
        img.type === "image" ? (
          <img
            key={img.id}
            src={img.vid1}
            alt={`Image ${img.id}`}
                 
          />
        ) : (
          <video 
    key={img.id} 
    src={img.vid1} 
    muted 
    loop 
    autoPlay
/>
          
        )
    
       
      ))}
       <div className="botstoyinput">
       <div><img src={chart}/></div>
       <div><input placeholder="Send Message"/></div>
        <div><img src={heart}/></div>
        <div><img src={send }/></div>
       </div>
</div>


  </div>
)


}