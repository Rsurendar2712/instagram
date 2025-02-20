import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Frontpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import bottumicon1 from './assets/bottumicon.png';
import bottumicon from './assets/bottumicon1.png';
import logo from './assets/logo1.png';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

 

export const Signin = () => {
  
  const location = useLocation(); // Get data from the Login page
  const navigate = useNavigate(); // Use the hook here

 
  const users = location.state?.data || []; // Extract registered users
   const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');


  function loginn() {
    
   

    const user = users.find(
      (u) => u.username === username   && u.password === password 
    ) || (username === "anu" && password === "2704")||(username === "meena" && password === "1804");
    

    if (user) {
      alert('Login successful!');
      navigate('/homepage'); // Redirect to the dashboard
    } else {
      alert('Invalid username or password!');
    }
  }

  return (
    <div className="userlogin">
      <div className="container">
        <img src={logo} alt="instalogo" />
        {/* <input type="text" placeholder="Phone number, username, or email address" id="sing_name"  />
        <input type="password" placeholder="Password" id="sing_pass" />
         */}
         <input
         id="sing_name"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
      id="sing_pass"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        <button onClick={loginn}>Login</button>

        <div className="line-container">
          <div className="lines">&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div className="texts">
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;OR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
        <div className="bottom">
          <a>
            <p>
              <FontAwesomeIcon icon={faFacebookSquare} className="icon" /> Log in with Facebook
            </p>
          </a>
          <p>
            <a>Forgot password?</a>
          </p>
        </div>
      </div>
      <div className="footer">
        <p>
          Don't have an account?{' '}
          <NavLink to="/Login">
            Sign up
          </NavLink>
        </p>
      </div>
      <d>Get the app.</d>
      <div className="bottumicon">
        <div className="bottum1">
          <img src={bottumicon} alt="icon1" />
        </div>
        <div className="bottum">
          <img src={bottumicon1} alt="icon2" />
        </div>
      </div>
      
 
    


    </div>
  );
};
