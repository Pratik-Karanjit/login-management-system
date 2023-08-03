import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getLoginInfo, removeLoginInfo } from '../utils/loginInfo';
import axios from 'axios';

const LogoutAccount = () => {
  const navigate = useNavigate();

  let logoutAdmin = async () => {
    try {
      await axios({
        url: `http://localhost:8000/users/logout?token=${getLoginInfo()?.token}`,         //sent login token in url itself so that backend's isAuthenticatedForEmail middleware can get the token from query
        method: "delete",
      });
  
      removeLoginInfo();                   //when logout is pressed we call the removeLoginInfo so that token is removed
  
      navigate(`/login`);
    } catch (error) {
      console.log("Unable to Logout");
    }
  };
  

  return (
    <div className="container">
      <div className="box">
     
        <div>
          <h1>Do you want to logout?</h1>
        {getLoginInfo()?.token? <button className = "form-button" onClick={()=>{  //It checks if the token value exists in the
        //  result of the getLoginInfo() function call. If the token exists, it renders the content inside the parentheses (...), 
        //  otherwise it renders null.
logoutAdmin()
      }}>
        Yes

      </button>:null}
      <button className = "form-button" onClick={(e) => {
        navigate("/")
      }}>No</button>
        </div>
      </div>
    </div>
  );
};

export default LogoutAccount;

