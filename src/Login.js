import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate correctly
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import bottumicon1 from './assets/bottumicon.png';
import bottumicon from './assets/bottumicon1.png';
import logo from './assets/logo1.png';
import { reels } from './Reels';
import { useState } from 'react';



export const Login = () => {
  const [da,setda]=useState(reels);
  const [data, setData] = useState([]); // Initialize with an empty array.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); 
  const [fullName, setFullName] = useState('');
 

  const navigate = useNavigate(); // Initialize useNavigate.

  const signUp = () => {
    if (!email || !fullName || !username || !password) {
      alert('All fields are required!');
      return; // Prevent further execution if fields are missing.
    }
   
    

    alert('User registered successfully!');
    const newUser = {
      id: data.length+1, // Generates a unique ID for the user.
      email,
      fullName,
      username,
      password,
       like: './assets/heart.png',
      liked: './assets/heart1.png',
      isliked: true,
       book:'./assets/bookmark.png',
      bookd:'./assets/bookmark1.png',
      isbook:true,
      command:null 
    };
    

    const updatedData = [...data, newUser]; // Add new user data to the existing array.
    setData([...data, newUser ]);
  
   

    // Clear the input fields.
    setEmail('');
    setFullName('');
    setUsername('');
    setPassword('');

    // Navigate to the sign-in page after successful signup.
    navigate('/signin', { state: { data :updatedData} })
  };

  return (
    <div className="userlogins">
      
      
      <div className="containers">
        <img src={logo} alt="Instagram Logo" />
        <h4>Sign up to see photos and videos from your friends.</h4>

        <div id="button">
          <button className="loginwf">
            <FontAwesomeIcon icon={faFacebookSquare} className="icon" id="icons" /> Login With Facebook
          </button>
        </div>

        <div className="line-containers">
          <div className="lines"></div>
          <div className="texts">OR</div>
        </div>

        <div className="datain">
          <input
            type="text"
            placeholder="Mobile number or email address"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           
          />
          <input
            type="text"
            placeholder="Full Name"
            id="Fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            id="usename"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="oapl">
          <div className="pl">People who use our service may have uploaded</div>
          <div className="pln">your contact information to Instagram. Learn more</div>
          <div className="plsn">By signing up, you agree to our Terms, Privacy</div>
          <div className="plnn">Policy and Cookies Policy.</div>
        </div>

        <button className="singupl" onClick={signUp} >
          Sign Up
        </button>
      </div>

      <div className="footers">
        <p>
          Have an account? <NavLink to="/Signin">Log in</NavLink>
        </p>
      </div>

      <d>Get the app.</d>
      <div className="bottumicon">
        <div className="bottum1">
          <img src={bottumicon} alt="App Store" />
        </div>
        <div className="bottum">
          <img src={bottumicon1} alt="Google Play Store" />
        </div>
      </div>
    </div>
  );
};
