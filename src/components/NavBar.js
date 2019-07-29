import React from "react"
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../images/logo.png';
import ProfilePhoto from '../images/Ellipse.png';
import PhoneIcon from '../images/Phone.jpg';
import LaptopIcon from '../images/Laptop.jpg';
import PCIcon from '../images/PC.jpg';

//style buat react link
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:hover {
        cursor: pointer;
    }
`;
let display = false;
const signAndProperty = [['&equiv;','none','0'],['&times','inline','300px']]

let toggleVisibility = () => {
    let select = (elem) => document.getElementById(elem);
    display = !display;
    select('dropdown-menu-list').style.display = signAndProperty[+display][1];
    select('more-button').innerHTML = signAndProperty[+display][0];
}

let toggleAskBar = () => {
    let select = (elem) => document.getElementById(elem);
    display = !display;
    select('askbar').style.height = signAndProperty[+display][2];
}

const NavBar = () => {
    return(
        <div id="navbar">
            <StyledLink to={'/Main'}><img alt="logo" id="logo" src={Logo}></img></StyledLink>
            <div id="dropdown-menu">
                <span id='more-button' onClick={toggleVisibility}>&equiv;</span>
                <div id="dropdown-menu-list">
                    <ul id="dropdown-links-container">
                        <img src={ProfilePhoto} id='profile-photo' alt='profile'></img>
                        <h6>Joe Taslim</h6>
                        <li className="dropdown-links">Add a Question</li>
                        <p id="categories-heading">FORUM CATEGORIES</p>
                        <img className="dropdown-icons" src={PhoneIcon} alt= 'phoneicon' /><li className="dropdown-links-sub">Phones</li><br />
                        <img className="dropdown-icons" src={LaptopIcon} alt='laptop icon' /><li className="dropdown-links-sub">Laptops</li><br />
                        <img className="dropdown-icons" src={PCIcon} alt='pc icon' /><li className="dropdown-links-sub">PCs</li><br />
                        <li className="dropdown-links">My Profile</li>
                        <li className="dropdown-links">FAQs</li>
                    </ul>
                </div>
            </div>
            <button id='ask-button' onClick={toggleAskBar}>ASK</button>
        </div>
                
    )
}

export default NavBar;