import React from "react"
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//style buat react link
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:hover {
        cursor: pointer;
    }
`;

const NavBar = () => {
    return(
        <div id="navbar">
            <ul id="navbar-links-container">
                <StyledLink to={'/'}><li id="navbar-links">Home</li></StyledLink>
                <li id="navbar-links">About</li>
                <li id="navbar-links">Contact Us</li>
            </ul>
        </div>
    )
}

export default NavBar;