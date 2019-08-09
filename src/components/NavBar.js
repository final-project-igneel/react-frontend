import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../images/logo.png";
import ProfilePhoto from "../images/Ellipse.png";
import PhoneIcon from "../images/Phone.jpg";
import LaptopIcon from "../images/Laptop.jpg";
import PCIcon from "../images/PC.jpg";
import { toggleVisibility, toggleAskBar } from "../helpers/index";
import { Redirect } from 'react-router-dom';
//style buat react link
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const NavBar = props => {
  let userFirstName = localStorage.getItem('user-firstName');
  let userLastName = localStorage.getItem('user-lastName');

  let handleLogout = () => {
    localStorage.clear();
    localStorage.setItem("logged-in", false);
    return <Redirect to='/main' />
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1000);
  };

  let handleClick = () => {
    setTimeout(() => {
      window.location.reload()
    },100)
  }

  return (
    <div id="navbar">
      <StyledLink to={"/main"}>
        <img alt="logo" id="logo" src={Logo} />
      </StyledLink>
      <div id="sidebar-container">
        <span id="more-button" onClick={toggleVisibility}>
          &equiv;
        </span>
        <div id="sidebar">
          <img src={ProfilePhoto} id="profile-photo" alt="profile" />
          <h6>{userFirstName.slice(0,1)==="\"" && userFirstName.slice(1,-1)} {userLastName.slice(0,1)==="\"" && userLastName.slice(1,-1)}</h6>
          <h6>{userFirstName.slice(0,1)!=="\"" && userFirstName} {userLastName.slice(0,1)!=="\"" && userLastName}</h6>
          <hr width="70%" />
          <p id="categories-heading">FORUM CATEGORIES</p>
          <StyledLink to={"/category/phones"} onClick={handleClick}>
            <div className="sidebar-links-sub-container">
              <img className="sidebar-icons" src={PhoneIcon} alt="phoneicon" />
              <li className="sidebar-links-sub">Phones</li>
            </div>
          </StyledLink>
          <StyledLink to={"/category/laptops"} onClick={handleClick}>
            <div className="sidebar-links-sub-container">
              <img
                className="sidebar-icons"
                src={LaptopIcon}
                alt="laptop icon"
              />
              <li className="sidebar-links-sub">Laptops</li>
            </div>
          </StyledLink>
          <StyledLink to={"/category/computers"}  onClick={handleClick}>
            <div className="sidebar-links-sub-container">
              <img className="sidebar-icons" src={PCIcon} alt="pc icon" />
              <li className="sidebar-links-sub">PCs</li>
            </div>
          </StyledLink>
          <hr width="70%" />
          <StyledLink to={"/My_Profile"}>
          <li className="sidebar-links">My Profile</li>
          </StyledLink>
          <StyledLink to={"/About_Us"}>
            <li className="sidebar-links">About Us</li>
          </StyledLink>
          <li onClick={handleLogout} className="sidebar-links">
            Logout
          </li>
        </div>
        <div id="grey-overlay" onClick={toggleVisibility} />
      </div>
      <button id="submit-question" onClick={props.handleSubmit}>
        Submit
      </button>
      <button
        style={{ display: props.askButton === "invisible" ? "none" : "block" }}
        id="ask-button"
        onClick={toggleAskBar}
      >
        ASK
      </button>
    </div>
  );
};

export default NavBar;
