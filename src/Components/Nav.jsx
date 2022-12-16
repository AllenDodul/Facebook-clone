import React from "react";
import ".././Styles/Nav";

const Nav = () =>{
  return(
    <nav>
      <div className="nav_left" >
        <img 
        className="logo"
        src="https://i.ibb.co/XycY58j/facebook.png" 
        alt="facebook" 
        border="0" />
      </div>
      <div className="nav_center"></div>
      <div className="nav_right"></div>
    </nav>
  )
}
export default Nav;