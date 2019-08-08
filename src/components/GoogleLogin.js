import React from "react";
import GoogleLogin from "react-google-login";
import googleIcon from "../images/googleicon.png";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signin } from "../redux/actions/signin";

const GoogleLoginButton = props => {
  return (
    <div>
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
        onSuccess={responseGoogle => {
          // localStorage.setItem("googleAccount", JSON.stringify(responseGoogle));
          props.history.push("/Main");
          axios
            .post(`${process.env.REACT_APP_API_URL}/users/signup`, {
              firstName: responseGoogle.profileObj.givenName,
              lastName: responseGoogle.profileObj.familyName,
              email: responseGoogle.profileObj.email,
              password: responseGoogle.googleId
            })
            .then(response => {
              console.log(response);
              if (response.status === 201) {
                this.props.history.push("/main");
              }
            })
            .catch(error => {
              axios
                .post(`${process.env.REACT_APP_API_URL}/users/signin`, {
                  email: responseGoogle.profileObj.email,
                  password: responseGoogle.googleId
                })
                .then(res => {
                  localStorage.setItem('user-id', res.data.data.users.id)
                  window.location.reload();
                })
                .then(() => {
                  // this.props.history.push("/main");
                  // window.location.reload();
                })
                .catch(err => {
                  console.log(err);
                });
            });
        }}
        onFailure={responseGoogle => console.log(responseGoogle)}
        cookiePolicy={"single_host_origin"}
      />
      {console.log(props)}
    </div>
  );
};

export default connect(
  null,
  { signin }
)(withRouter(GoogleLoginButton));
