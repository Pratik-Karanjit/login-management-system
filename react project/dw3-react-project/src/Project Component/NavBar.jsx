// import React from 'react'
// import { NavLink} from 'react-router-dom'

// const NavBar = () => {
//   return (
//     <div><nav style = {{backgroundColor: "red"}}>
//     <NavLink to= "/create" style={{marginLeft: "20px", color: "white"}}>Register</NavLink>
//     <NavLink to= "/login" style={{marginLeft: "20px",  color: "white"}}>Login</NavLink>
//     </nav></div>
//   )
// }

// export default NavBar



import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Project CSS/navbar.css'; // Import the external CSS file

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/create" className="navbar-link">Register</NavLink>
        <NavLink to="/login" className="navbar-link">Login</NavLink>
        <NavLink to="/logout" className="navbar-link">Logout</NavLink>
        <NavLink to="/delete" className="navbar-link">Delete</NavLink>
        <NavLink to="/my-profile" className="navbar-link">My Profile</NavLink>
        <NavLink to="/deactivate" className="navbar-link">Deactivate</NavLink>
        <NavLink to="/security" className="navbar-link">Security</NavLink>
      </nav>
    </div>
  );
};

export default NavBar;


