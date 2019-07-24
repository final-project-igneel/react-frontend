import React from "react";
import FAQ from './FAQ';
import MainContent from './MainContent';
import UserProfile from './UserProfile';

const MainPage = () => {
  return (
    <div className="container">
      <MainContent />
      <div id="sidebar">
        <UserProfile />
        <FAQ />
      </div>
    </div>
  );
};

export default MainPage;
