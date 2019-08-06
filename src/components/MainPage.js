import React from "react";
import MainContent from './MainContent';
import UserProfile from './UserProfile';
import NavBar from './NavBar';
import {Link} from 'react-router-dom'

const MainPage = () => {
  return (
    <div className="container">
      <NavBar />
      <div id='askbar'><input id="askbox"></input></div>
      <div id="side-content">
        <UserProfile />
        <Link to="/aboutUs">
        <h1>About Us</h1>
        </Link>

        {/* <FAQ /> */}
      </div>
      <div id='main-content'>
        <MainContent />
      </div>
    </div>
  );
};

export default MainPage;
