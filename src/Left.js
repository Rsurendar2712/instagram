import React from 'react'
import  './App.css'
import profile from "./assets/profile.jpg";
import profile_pic from './assets/profile_pic.jpeg'
import google from './assets/google.jpeg'
import insta from './assets/instagram_logo.png'
import accenture from './assets/accenture.jpeg'
import tcs from './assets/TCS.png'
export const Left = () => {


  const info=[{id:1,
    pic:google,
    username:"Google    ",
    name:""
  },
  {id:2,
    pic:insta,
    username:"Instagram",
    name:""
  },
  {id:3,
    pic:accenture,
    username:"Accenture",
    name:""
  }
 ]

return(
    <div className='leftbar'>
 <div class="prof">
    <div class="profimg">
        <img src={profile}></img>
    </div>
     <div class="nam">
      <div>
         <b>  surendar_2712</b>
      </div>
      <div>
        Surendar
      </div>
      </div>
      <div class="accchan">
        <b>Switch</b>
      </div>

 </div>
 <div class="nexpof">
  <div class="nexpofc"> <b>Suggested for you</b></div>
  <div class="nexpofsc">    See All</div>
 </div>

{info.map((value,id)=>(
  <div className='sugge'>
  
  <div class="prof">
     <div class="profimg">
         <img src={value.pic}></img>
     </div>
      <div class="nam">
       <div>
          <b> {value.username} </b>
       </div>
       <div>
        {value.name}
       </div>
       </div>
       <div class="accchan">
         <b>Follow</b>
       </div>
 
  </div>
</div> 
 
))};
</div>

)

  
};
