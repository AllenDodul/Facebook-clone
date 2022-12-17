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
          border="0" 
        />
        <div className="searchContainer">
          <img
            className="icon"
            src="https://i.ibb.co/8MTP485/loupe.png"
            alt="loupe" border="0"
          />
          <input type="text"/>
        </div>
      </div>
      <div className="nav_center">
        <div className="nav_center_box">
          <img 
            className="icon"
            src="https://i.ibb.co/rQtrjgP/home.png" alt="home" border="0"
          />
          <img 
            className="icon"
            src="https://i.ibb.co/X2wbRd7/report.png" alt="report" border="0"
          />
          <img 
            className="icon"
            src="https://i.ibb.co/wRWcQtD/footage.png" alt="footage" border="0"
            />
          <img 
            className="icon"
            src="https://i.ibb.co/HVm3tBm/shop.png" 
            alt="shop"
            border="0"
          />
          <img 
            className="icon" 
            src="https://i.ibb.co/VjJyM23/team.png" 
            alt="team"
            border="0"
          />
        </div>
      </div>
      <div className="nav_right">
        <div className="person">
          <img 
            className="icon" 
            src="https://i.ibb.co/DGjvxwY/user.png" 
            alt="user"
            border="0"
          />
          <h4>Dodulllll</h4>
        </div>
        <img 
          className="icon"
          src="https://i.ibb.co/GCvmQCW/plus.png" 
          alt="plus" 
          border="0"
        />
        <img 
          className="icon"
          src="https://i.ibb.co/WnRjCfR/message.png" 
          alt="message" 
          border="0"
        />
        <img 
          className="icon"
          src="https://i.ibb.co/B6GBr3Z/notification.png" 
          alt="notification" 
          border="0"
        />
      </div>
    </nav>
  )
}
export default Nav;