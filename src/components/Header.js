import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="Header flex items-center justify-between bg-white shadow-md py-4 px-6">
      {/* Logo of the website */}
      <div className="logo-container">
        <img className="logo w-24" src={LOGO_URL} alt="Website Logo" />
      </div>

      {/* Menu items */}
      <div className="nav-items">
        <ul className="flex items-center space-x-6 text-lg font-semibold text-gray-700">
          <li className="flex items-center space-x-2">
            <span className="text-sm">Online Status:</span>
            <span>{onlineStatus ? "✅" : "🔴"}</span>
          </li>
          <li className="hover:text-blue-500 transition duration-300"><Link to="/" className="no-underline">Home</Link></li>
          <li className="hover:text-blue-500 transition duration-300"><Link to="/about" className="no-underline">About Us</Link></li>
          <li className="hover:text-blue-500 transition duration-300"><Link to="/contact" className="no-underline">Contact Us</Link></li>
          <li className="hover:text-blue-500 transition duration-300"><Link to="/cart" className="no-underline">Cart</Link></li>
          <li className="hover:text-blue-500 transition duration-300"><Link to="/grocery" className="no-underline">Grocery</Link></li>
          <button 
            className="login-button ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            onClick={() => {
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
            }}
          >
            ☢️ {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
