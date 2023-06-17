import React, {useState} from 'react'
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import logo_img from "../assets/logo.png";

// navbar ; 상단 menu
// const navbarLinks = [{url: "/home", title: "Home"}];
const Navbar = ({ navbarLinks }) => {

  const [menuClicked, setMenuClicked] = useState(true);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <nav className="navbar">
        <div className="navbar_logo_div">
          <img src={logo_img} className="navbar_logo_img" />
          <span className="navbar_logo">greenmate</span>
        </div>

        {menuClicked ? (
          <FiMenu size={25} className="navbar_menu" onClick={toggleMenuClick} />
        ) : (
          <FiX size={25} className="navbar_menu" onClick={toggleMenuClick} />
        )}
        <ul
          className={menuClicked ? "navbar_list" : "navbar_list navbar_list--active"
          }
        >
          {navbarLinks.map(item => {
            return (
              <li className="navbar_item" key={item.title}>
                <a className="navbar_link" href={item.url}>
                    {item.title}
                </a>
              </li>
            );
          })}
        </ul>
    </nav>
  );
};

export default Navbar;
