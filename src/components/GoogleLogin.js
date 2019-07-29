import React from "react";
import GoogleLogin from "react-google-login";
import googleIcon from "../images/googleicon.png";

const responseGoogle = response => {
  console.log(response);
};

const GoogleLoginButton = () => {
  return (
    <GoogleLogin
      clientId="593079113552-j09gs1t81luomk0ekgf0g1dmg23p9522.apps.googleusercontent.com"
      render={renderProps => (
        <button
          className='google-btn login-button"'
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <img alt="logo" id="google-icon" src={googleIcon} />
          Continue with Google
        </button>
      )}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButton;
