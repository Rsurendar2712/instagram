
import heart1 from './assets/heart1.png'
import reeaal from './assets/reeaal.mp4'
import bookmark from './assets/bookmark.png'
import bookmark1 from './assets/bookmark1.png'
import heart from './assets/heart.png'
import search from './assets/search.png';
import verify from './assets/verify.png'; 
import Linkedin from './assets/Linked-in.jpg';
import naukri from './assets/naukri.png';
import indeed from './assets/indeed.png';
import Gethub  from './assets/gethub.png';
import cal from './assets/cal_proj.png'
import video from './assets/reeaal.mp4'
import shin from  './assets/shin.jpg'
 import eagle from './assets/eagle.jpg'


export const reels=()=>{
    
    return [ {
          "id": 0,
          "title": "myself",
          "story": reeaal,
          "vid": shin,
          "img": search,
          "username": "surendar",
        "password":"123",
          "like": heart,
          "liked": heart1,
          "isliked": true,
          "book":bookmark,
          "bookd":bookmark1,
          "isbook":true,
          "command":"likedby",
          "type":"image"
          },
      
      
      {
      "id": 1,
      "title": "Linked-in",
      "story": Linkedin,
      "vid": video,
      "img": null,
      "username": "surendar",
    "password":"123",
      "like": heart,
      "liked": heart1,
      "isliked": true,
      "book":bookmark,
      "bookd":bookmark1,
      "isbook":true,
      "command":"likedby",
      "type":"image"
      },
      {
        "id": 2,
        "title": "Naukri",
        "story": naukri,
        "vid": search,
        "img": search,
        "username": "surendar",
      "password":"123",
        "like": heart,
        "liked": heart1,
        "isliked": true,
        "book":bookmark,
        "bookd":bookmark1,
        "isbook":true,
        "command":"likedby",
        "type":"image"
        },
        
          {
            "id": 3,
            "title": "indeed",
            "story": indeed,
            "vid": "",
            "img": indeed,
            "username": "surendar",
          "password":"123",
            "like": heart,
            "liked": heart1,
            "isliked": true,
            "book":bookmark,
            "bookd":bookmark1,
            "isbook":true,
            "command":"likedby",
            "type":"image"
            },
            {
              "id": 4,
              "title": "Github",
              "story": Gethub,
              "vid": "  ",
              "img":Gethub,
              "username": "surendar",
            "password":"123",
              "like": heart,
              "liked": heart1,
              "isliked": true,
              "book":bookmark,
              "bookd":bookmark1,
              "isbook":true,
              "command":"likedby",
              "type":"image"
              }
      ];  
   
}
