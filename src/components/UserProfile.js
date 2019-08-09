import React from "react";
import NavBar from "./NavBar";
import ProfilePhoto from "../images/Ellipse.png";
import Swal from "sweetalert2";

import axios from "axios";

import { css } from "@emotion/core";
import FadeLoader from "react-spinners/ScaleLoader";

const override = css`
  position: fixed;
  top: 30vh;
  left: 45vw;
  border-color: red;
`;

export class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      firstName: "",
      lastName: "",
      id: `${localStorage.getItem("user-id")}`
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      document.getElementsByClassName("userFirstName")[0].value === "" ||
      document.getElementsByClassName("userLastName")[0].value === ""
    ) {
      Swal.fire({
        title: "Oops",
        text: "First and lastname boxes cannot be blank",
        type: "warning"
      });
    } else {
      axios
        .put(`${process.env.REACT_APP_API_URL}/users/update/${this.state.id}`, {
          firstName: this.state.firstName,
          lastName: this.state.lastName
        })
        .then(response => {
          console.log(response);
          if (response.status === 200) {
            this.setState({
              isLoading: true
            });
            window.localStorage.setItem(
              "user-firstName",
              JSON.stringify(response.data.editUser.firstName)
            );
            window.localStorage.setItem(
              "user-lastName",
              JSON.stringify(response.data.editUser.lastName)
            );

            Swal.fire({
              title: "Success!",
              text: "Updated!",
              type: "success"
            });

            this.props.history.push("/Main");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div className="sweet-loading">
          <FadeLoader
            css={override}
            sizeUnit={"px"}
            height={150}
            width={30}
            color={"#BC4646"}
            loading={this.state.loading}
          />
        </div>
      );
    } else {
      return (
        <div>
          <NavBar askButton="invisible" />
          <div>
            <div id="profile-edit">
              <img src={ProfilePhoto} id="profile-photo" alt="profile" />
              <h2>
                {localStorage.getItem("user-firstName").slice(0,1) === '"' &&
                  localStorage.getItem("user-firstName").slice(1, -1)}
                {localStorage.getItem("user-lastName").slice(0,1) === '"' &&
                localStorage.getItem("user-lastName").slice(1, -1)}
              </h2>
              <h2>
                {localStorage.getItem("user-firstName").slice(0,1) !== '"' && 
                localStorage.getItem("user-firstName")}{" "}
                {localStorage.getItem("user-lastName").slice(0,1) !== '"' &&
                localStorage.getItem("user-lastName")}
              </h2>
            </div>
            <div className="form-profile-edit">
              <form onSubmit={this.handleSubmit}>
                <div className="edit-user-form">
                  <h3>Edit Profile Name</h3>
                  <div className="inputbox-editUser">
                    <h5>First Name</h5>
                    <input
                      className="inputbox userFirstName"
                      id="inputbox-userprofile"
                      placeholder={localStorage
                        .getItem("user-firstName")
                        .slice(0,1) ?
                        localStorage
                        .getItem("user-firstName")
                        .slice(1, -1) :
                        localStorage
                        .getItem("user-firstName")}
                      type="text"
                      name="firstName"
                      onChange={this.handleChange}
                      not
                    />
                  </div>
                  <div className="inputbox-editUser">
                    <h5>Last Name</h5>
                    <input
                      className="inputbox userLastName"
                      id="inputbox-userprofile"
                      placeholder={localStorage
                        .getItem("user-lastName")
                        .slice(0,1) === '"' ?
                        localStorage
                        .getItem("user-lastName")
                        .slice(1, -1) :
                        localStorage
                        .getItem("user-lastName")}
                      type="text"
                      name="lastName"
                      onChange={this.handleChange}
                    />
                    <button className="edit-button" type="submit">
                      Save!
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default UserProfile;
