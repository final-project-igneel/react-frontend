import React from "react";
import NavBar from "./NavBar";
import ProfilePhoto from "../images/Ellipse.png";

import axios from "axios";

export class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      id: `${localStorage.getItem("user-id")}`
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}/users/update/${this.state.id}`, {
        firstName: this.state.firstName,
        lastName: this.state.lastName
      })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          window.localStorage.setItem(
            "user-firstName",
            JSON.stringify(response.data.editUser.firstName)
          );
          window.localStorage.setItem(
            "user-lastName",
            JSON.stringify(response.data.editUser.lastName)
          );
          this.props.history.push("/Main");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="MyProfile">
        <NavBar askButton="invisible" />
        <div id="user-profile">
          <h2>
            {localStorage.getItem("user-firstName").slice(1, -1)}{" "}
            {localStorage.getItem("user-lastName").slice(1, -1)}
          </h2>
          <img src={ProfilePhoto} id="profile-photo" alt="profile" />

          <form id="login-form" onSubmit={this.handleSubmit}>
            <div id="edit-user-form">
              <h3>My Profile</h3>
              <div className="inputbox-container">
                <h5>First Name</h5>
                <input
                  className="inputbox"
                  id="inputbox-userprofile"
                  placeholder={localStorage
                    .getItem("user-firstName")
                    .slice(1, -1)}
                  type="text"
                  name="firstName"
                  onChange={this.handleChange}
                />
              </div>
              <div className="inputbox-container">
                <h5>Last Name</h5>
                <input
                  className="inputbox"
                  id="inputbox-userprofile"
                  placeholder={localStorage
                    .getItem("user-lastName")
                    .slice(1, -1)}
                  type="text"
                  name="lastName"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button id="sign-up-button" type="submit">
              Save!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default UserProfile;
