import React from "react";
import FacebookLogin from "react-facebook-login";
import facebookIcon from "../images/facebookicon.png";

const responseFacebook = response => {
  console.log(response);
};

const FacebookLoginButton = () => {
  return (
    <FacebookLogin
    appId="623657398142214"
    // autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="facebook-btn login-button"
    icon={<img id='facebook-icon' alt='facebook icon' src={facebookIcon} />}
  />
  );
};

export default FacebookLoginButton;
