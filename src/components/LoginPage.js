import React from "react";
import { Link } from "react-router-dom";
import wallpaper from "../images/wallpaper.png";
import logo from "../images/logo.png";
// import facebookIcon from "../images/facebookicon.png";
import FacebookLoginButton from "./FacebookLogin";
import GoogleLoginButton from "./GoogleLogin";

export class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      email: event.target.email,
      password: event.target.password
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(`Email: ${this.state.email}`);
  };

  render() {
    return (
      <form id="login-form" onSubmit={this.handleSubmit}>
        <img id="wallpaper" src={wallpaper} alt="wallpaper" />
        <div id="form">
          <div id="logo-login-form-container">
            <img src={logo} alt="logo" />
          </div>
          <div id="form-container">
            <div id="fast-login">
              <p id="fast-login-title">
                Need quick login? Sign in with your social media account.
              </p>
              <FacebookLoginButton />
              <GoogleLoginButton />
              <p id="agreement-sentence">
                By signing up, you agree to our Terms of Service and Privacy
                Policy
              </p>
            </div>
            <div id="vertical-line" />
            <div id="signup-form">
              <h4>..or sign in using your email</h4>
              <div className="inputbox-container">
                <input
                  className="inputbox"
                  id="inputbox-email"
                  placeholder="Email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="inputbox-container">
                <input
                  className="inputbox"
                  id="inputbox-password"
                  placeholder="Password"
                  type="password"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <p id="already-have-an-account">
                Don't have an account yet? Sign up <Link to="/">here.</Link>
              </p>
              <Link to="/Main">
                <button id="sign-up-button" type="submit">
                  Sign me in!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;
