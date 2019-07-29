import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../images/logo.png";
import ProfilePhoto from "../images/Ellipse.png";
import PhoneIcon from "../images/Phone.jpg";
import LaptopIcon from "../images/Laptop.jpg";
import PCIcon from "../images/PC.jpg";

//style buat react link
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
  }
`;
let display = false;
let display2 = false;
const signAndProperty = [
  ["&equiv;", "-500px", "0", "", "black", "0",'ASK','-14vw'],
  ["&times", "0", "300px", "What's on your mind today?", "white", "100%",'Cancel','14vw']
];

let toggleVisibility = () => {
  let select = elem => document.getElementById(elem);
  display = !display;
  select("more-button").innerHTML = signAndProperty[+display][0];
  select("sidebar").style.left = signAndProperty[+display][1];
  select("more-button").style.color = signAndProperty[+display][4];
  select("grey-overlay").style.width = signAndProperty[+display][5];
};

let toggleAskBar = () => {
  let select = elem => document.getElementById(elem);
  display2 = !display2;
  select("askbar").style.height = signAndProperty[+display2][2];
  select("askbox").placeholder = signAndProperty[+display2][3];
  select("askbox").value = "";
  select('ask-button').innerHTML = signAndProperty[+display2][6];
  select('submit-question').style.right = signAndProperty[+display2][7];
};

const NavBar = () => {
  return (
    <div id="navbar">
      <StyledLink to={"/Main"}>
        <img alt="logo" id="logo" src={Logo} />
      </StyledLink>
      <div id="sidebar-container">
        <span id="more-button" onClick={toggleVisibility}>
          &equiv;
        </span>
        <div id="sidebar">
          <img src={ProfilePhoto} id="profile-photo" alt="profile" />
          <h6>Joe Taslim</h6>
          <hr width='70%' />    
          <p id="categories-heading">FORUM CATEGORIES</p>
          <div className="sidebar-links-sub-container">
            <img className="sidebar-icons" src={PhoneIcon} alt="phoneicon" />
            <li className="sidebar-links-sub">Phones</li>
          </div>
          <div className="sidebar-links-sub-container">
            <img className="sidebar-icons" src={LaptopIcon} alt="laptop icon" />
            <li className="sidebar-links-sub">Laptops</li>
          </div>
          <div className="sidebar-links-sub-container">
            <img className="sidebar-icons" src={PCIcon} alt="pc icon" />
            <li className="sidebar-links-sub">PCs</li>
          </div>
          <hr width='70%' />  
          <li className="sidebar-links">My Profile</li>
          <li className="sidebar-links">FAQs</li>
        </div>
        <div id="grey-overlay" onClick={toggleVisibility} />
      </div>
      <button id="submit-question">Submit</button>
      <button id="ask-button" onClick={toggleAskBar}>
        ASK
      </button>
    </div>
  );
};

export default NavBar;
