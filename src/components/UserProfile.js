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

  // render() {
  //   return (
  //     <div className="MyProfile">
  //       <NavBar askButton="invisible" />
  //       <div className="edit-content">
  //       <div id="user-profile">
  //       <img src={ProfilePhoto} id="profile-photo" alt="profile" />
  //         <h2>
  //           {localStorage.getItem("user-firstName").slice(1, -1)}{" "}
  //           {localStorage.getItem("user-lastName").slice(1, -1)}
  //         </h2>
          
  //         </div>
          
  //         <div id="edit-user-form">
  //         <form onSubmit={this.handleSubmit}>
  //           <div className="edit-user-form">
  //             <h3>My Profile</h3>
  //             <div className="inputbox-container">
  //               <h5>First Name</h5>
  //               <input
  //                 className="inputbox"
  //                 id="inputbox-userprofile"
  //                 placeholder={localStorage
  //                   .getItem("user-firstName")
  //                   .slice(1, -1)}
  //                 type="text"
  //                 name="firstName"
  //                 onChange={this.handleChange}
  //               />
  //             </div>
  //             <div className="inputbox-container">
  //               <h5>Last Name</h5>
  //               <input
  //                 className="inputbox"
  //                 id="inputbox-userprofile"
  //                 placeholder={localStorage
  //                   .getItem("user-lastName")
  //                   .slice(1, -1)}
  //                 type="text"
  //                 name="lastName"
  //                 onChange={this.handleChange}
  //               />
  //               <button id="sign-up-button" type="submit">
  //             Save!
  //           </button>
  //             </div>
  //           </div>
            
  //         </form>
  //         </div>
  //       </div>
        
  //   </div>
  //   );
  // }


render() {
  return (
    <div>
      <NavBar askButton="invisible" />
      <div>
        <div id="profile-edit">
        <img src={ProfilePhoto} id="profile-photo" alt="profile" />
          <h2>
            {localStorage.getItem("user-firstName").slice(1, -1)}{" "}
            {localStorage.getItem("user-lastName").slice(1, -1)}
          </h2>
        </div>
        <div className='form-profile-edit'>
        <form onSubmit={this.handleSubmit}>
             <div className="edit-user-form">
             <h3>Edit Profile Name</h3>
             <div className="inputbox-editUser">
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
               <div className="inputbox-editUser">
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
                 <button className="edit-button" type="submit">
               Save!
             </button>
               </div>
             </div>
            
           </form>
        </div>
      </div>
    </div>
  )}}


export default UserProfile;
