import React from "react";
import MainContent from './MainContent';
import UserProfile from './UserProfile';
import NavBar from './NavBar';

const MainPage = () => {
  return (
    <div className="container">
      <NavBar />
      <div id='askbar'><input id="askbox"></input></div>
      <div id="side-content">
        <UserProfile />
        {/* <FAQ /> */}
      </div>
      <div id='main-content'>
        <MainContent />
      </div>
    </div>
  );
};

export default MainPage;
