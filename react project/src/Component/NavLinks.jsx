import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { baseUrl } from "../config/config";
import axios from "axios";
import { getLoginInfo, removeLoginInfo } from "../utils/loginInfo";

const NavLinks = () => {
  let navigate = useNavigate();
 let logoutAdmin =async()=>{

   try {
     await axios({
       url: `${baseUrl}/admin/logout`,
       method: "post",
       headers: {
         Authorization: `Bearer ${getLoginInfo()?.token}`
       }
       
     });

     removeLoginInfo()
    
     navigate(`/admin/login`);
   } catch (error) {
     console.log("Unable to Logout");
   }
  }
  return (
    <div>
      <NavLink to="/houses" style={{ marginRight: "10px" }}>
        Houses
      </NavLink>
      <NavLink to="/houses/form" style={{ marginRight: "10px" }}>
        Create Houses
      </NavLink>

      <NavLink to="/contacts" style={{ marginRight: "10px" }}>
        Contact
      </NavLink>
      <NavLink to="/contacts/form" style={{ marginRight: "10px" }}>
        Create Contact
      </NavLink>
      <NavLink to="/admin/register" style={{ marginRight: "10px" }}>
        Register
      </NavLink>
      {getLoginInfo()?.token?null:<NavLink to="/admin/login" style={{ marginRight: "10px" }}>
        Login
      </NavLink>}
     {getLoginInfo()?.token?<NavLink to="/admin" style={{ marginRight: "10px" }}>  Read All Admins</NavLink>:null} 
       
     {getLoginInfo()?.token?  <NavLink to="/admin/my-profile" style={{ marginRight: "10px" }}>
        Admin Profile
      </NavLink>:null}
      {getLoginInfo()?.token?<NavLink to ="/admin/update-my-profile" style={{ marginRight: "10px" }}>Update profile</NavLink>:null}
      {getLoginInfo()?.token?<NavLink to ="/admin/update-password" style={{ marginRight: "10px" }}>Update Password</NavLink>:null}

    
   {getLoginInfo()?.token? <button onClick={()=>{
logoutAdmin()
      }}>
        Logout

      </button>:null}
     
    </div>
  );
};

export default NavLinks;
