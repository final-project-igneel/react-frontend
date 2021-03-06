import React from "react";
import FacebookLogin from "react-facebook-login";
import facebookIcon from "../images/facebookicon.png";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signin } from "../redux/actions/signin";
import axios from "axios";

class FacebookLoginButton extends React.Component {
  responseFacebook = response => {

    this.props.history.push("/main");
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/signup`, {
        firstName: response.name,
        lastName: response.name,
        email: response.email,
        password: response.id
      })
      .then(res => {
        console.log(res);
        if (res.status === 201) {
          this.props.history.push("./main");
          localStorage.setItem("user-id", res.data.create.id);
          localStorage.setItem("user-firstName", res.data.create.name.split(' ')[0]);
          localStorage.setItem("user-lastName", res.data.create.name.split(' ')[1]);
          window.location.reload();
        }
      })
      .catch(error => {
        axios
          .post(`${process.env.REACT_APP_API_URL}/users/signin`, {
            email: response.email,
            password: response.id
          })
          .then(res => {
            localStorage.setItem("user-id", res.data.data.users.id);
            localStorage.setItem("user-firstName", res.data.data.name.split(' ')[0]);
            localStorage.setItem("user-lastName", res.data.data.name.split(' ')[1]);
            window.location.reload();
            this.props.history.push("/main");
          })
          .then(() => {
            // window.location.reload();
          })
          .catch(err => {
            console.log(err);
          });
      });
  };

  render() {
    return (
      <FacebookLogin
        appId="623657398142214"
        autoLoad={false}
        fields="name,email,picture"
        callback={this.responseFacebook}
        cssClass="facebook-btn login-button"
        icon={<img id="facebook-icon" alt="facebook icon" src={facebookIcon} />}
      />
    );
  }
}

export default connect(
  null,
  { signin }
)(withRouter(FacebookLoginButton));
