import React from "react";
// import jwt from "jsonwebtoken"
import MainContent from "./MainContent";
// import UserProfile from "./UserProfile";
import NavBar from "./NavBar";
import { extendAskBar } from "../helpers/index";
import axios from "axios";
import { toggleAskBar } from "../helpers/index";
import Swal from "sweetalert2";
import NewsItem from "./NewsItem";
import { Link} from 'react-router-dom';
// import FAQ from "./FAQ";
import Videos from "./Youtube";

let temporaryUserId = "-1"; //nanti diganti pas pakai JWT
if (JSON.parse(localStorage.getItem("user-id")) != null) {
  temporaryUserId = parseInt(JSON.parse(localStorage.getItem("user-id")));
}
class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryChosen: "",
      categoryChooserButton: [0, 0, 0],
      inputBoxTitle: "",
      inputBoxDetails: ""
    };
  }
  componentDidMount() {
    // const decoded = jwt.decode(localStorage.getItem("token"))
    // console.log(decoded);
    // console.log(decoded.users.firstName);
  }

  categoryChooser = id => {
    let arrayButtons = [0, 0, 0];
    arrayButtons[id - 1] = 1;

    this.setState({
      categoryChooserButton: arrayButtons
    });
    let elems = document.getElementsByClassName("category-chooser-button");
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.backgroundColor = "transparent";
      elems[i].style.color = "white";
    }

    let elem = document.getElementById(`category-chooser-button-${id}`);
    elem.style.color = "rgb(222, 110, 110)";
    elem.style.backgroundColor = "white";
  };

  handleChange = event => {
    extendAskBar(event.target.value === "");
    this.setState({
      inputBoxTitle: event.target.value
    });
  };

  handleChangeDetails = event => {
    this.setState({
      inputBoxDetails: event.target.value
    });
  };

  handleSubmit = async () => {
    if (this.state.inputBoxDetails === "") {
      alert("Please add more details to your question");
      console.log(temporaryUserId);
    } else {
      toggleAskBar();
      await axios
        .post(`${process.env.REACT_APP_API_URL}/threads/create`, {
          title: this.state.inputBoxTitle,
          input: this.state.inputBoxDetails,
          userid: temporaryUserId
        })
        .then(
          Swal.fire({
            title: "Nice!",
            text: "Your question has been submitted!",
            type: "success",
            confirmButtonColor: "#de6e6e"
          }),
          this.setState({
            inputBoxTitle: ""
          })
        )
        .catch(error => console.log(error));
      this.refs.mainContent.componentDidMount();
    }
  };

  render() {
    if (temporaryUserId !== "-1") {
      return (
        <div className="container">
          <NavBar handleSubmit={this.handleSubmit} />
          <div id="askbar">
            <div id="choose-category-container">
              <h3 id="pick-a-category">Pick a category</h3>
              <button
                id="category-chooser-button-1"
                className="category-chooser-button"
                onClick={() => this.categoryChooser("1")}
              >
                Phones
              </button>
              <button
                id="category-chooser-button-2"
                className="category-chooser-button"
                onClick={() => this.categoryChooser("2")}
              >
                Laptops
              </button>
              <button
                id="category-chooser-button-3"
                className="category-chooser-button"
                onClick={() => this.categoryChooser("3")}
              >
                PCs
              </button>
            </div>
            <input id="askbox" onChange={this.handleChange} />
            <textarea
              onChange={this.handleChangeDetails}
              id="askbox-details"
              placeholder="Describe your question in more details"
            />
          </div>
          {/* <div id="side-content">
                <UserProfile />
                <FAQ />
              </div> */}
          <div id="main-content">
            <div>
              <MainContent ref="mainContent" />
            </div>
            <div id="news-container">
              <Videos />
              <h3 id="today-technology">Today on Technology</h3>
              <a
                href="http://newsapi.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <p id="powered-newsapi">Powered by NewsAPI</p>
              </a>
              <div />
              <div id="news-items">
                <NewsItem />
              </div>
            </div>
          </div>
        </div>
      );
    } 
    if (localStorage.getItem("logged-in") === 'false') {
      return (
        <React.Fragment>
          <h1>You have been logged out</h1>
          <h1>Please click <Link to={'/'}>here</Link> to return to login page</h1>
        </React.Fragment>
      );
    } else {
      return (
        <div>
          <h1>You will be redirected to the main page</h1>
          <h2>If nothing happens in 5 seconds, please log in again</h2>
        </div>
      );
    }
  }
}

export default MainPage;
