import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="Header flex justify-between border border-gray-400 p-4 l">
      {/* Logo of the website */}
      <div className="logo-container">
        <img className="logo w-24" src={LOGO_URL} alt="Website Logo" />
      </div>

      {/* Menu items */}
      <div className="nav-items">
        <ul className="flex list-none text-2xl">
          <li className="p-2 m-2">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="p-2 m-2"><Link to="/" className="no-underline">Home</Link></li>
          <li className="p-2 m-2"><Link to="/about" className="no-underline">About Us</Link></li>
          <li className="p-2 m-2"><Link to="/contact" className="no-underline">Contact Us</Link></li>
          <li className="p-2 m-2">Cart</li>
          <li className="p-2 m-2 "><Link to="/grocery" className="no-underline">Grocery</Link></li>
          <button 
            className="login-button p-2 m-2 bg-white border-none cursor-pointer"
            onClick={() => {
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
            }}
          >
            ☢️{btnNameReact}
          </button >
        </ul>
      </div>
    </div>
  );
};

export default Header;
