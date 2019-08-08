import React from "react";
import { Link } from "react-router-dom";
import wallpaper from "../images/wallpaper.png";
import logo from "../images/logo.png";
import FacebookLoginButton from "./FacebookLogin";
import GoogleLoginButton from "./GoogleLogin";
import axios from "axios";
import Swal from "sweetalert2";
export class SignUp extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  componentDidMount() {
    console.log(this.props);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      Swal.fire({
        title: "Oops!",
        text:
          "Password fields do not match. Please confirm your password again",
        type: "warning",
        confirmButtonColor: "#de6e6e"
      });
    } else {
      axios
        .post(`${process.env.REACT_APP_API_URL}/users/signup`, {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password
        })
        .then(response => {
          console.log(response);
          if (response.status === 201) {
            this.props.history.push("/Login");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
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
              <h4>..or sign up using your email</h4>
              <div className="inputbox-name-container">
                <input
                  className="inputbox-name"
                  name="firstName"
                  id="inputbox-firstname"
                  placeholder="Firstname"
                  type="text"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
                <input
                  className="inputbox-name"
                  id="inputbox-lastname"
                  placeholder="Lastname"
                  name="lastName"
                  type="text"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="inputbox-container">
                <input
                  className="inputbox"
                  id="inputbox-email"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="inputbox-container">
                <input
                  className="inputbox"
                  id="inputbox-password"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="inputbox-container">
                <input
                  className="inputbox"
                  id="inputbox-password-confirm"
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                />
              </div>
              <p id="already-have-an-account">
                Already have an account? Sign in <Link to="/Login">here.</Link>{" "}
              </p>
              <button id="sign-up-button" type="submit">
                Sign me up!
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SignUp;
