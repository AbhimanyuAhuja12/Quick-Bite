import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header =()=>{

// let btnName = "Login";.
const [btnNameReact, setbtnNameReact] = useState("Login")

    return(
        <div className="header">
         
         {/* logo of website */}
          <div className="log-container">
            <img className="logo" src={LOGO_URL}>

            </img>
          </div >
         
         {/* menu items */}
          <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">AboutUs</Link></li>
                <li><Link to="/contact">ContactUs</Link></li>
                <li>Cart</li>
                <button className="login-button" onClick={()=>{
                 btnNameReact==="Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login")
                  // console.log(btnName);
                }}>☢️{btnNameReact}</button>
            </ul>
          </div>

        </div>
    );
};

export default Header;