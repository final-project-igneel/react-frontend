import React from "react";
import FAQ from './FAQ';
import MainContent from './MainContent';
import UserProfile from './UserProfile';
import NavBar from './NavBar';

const MainPage = () => {
  return (
    <div className="container">
      <NavBar />
      <div id='askbar'><input placeholder="What's your question?" id="askbox"></input></div>
      <div id="sidebar">
        <UserProfile />
        <FAQ />
      </div>
      <div id='main-content'>
        <MainContent />
      </div>
    </div>
  );
};

export default MainPage;
