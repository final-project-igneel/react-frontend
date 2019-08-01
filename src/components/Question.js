import React from "react";
import NotClicked from "../images/likeButtonTransparent.svg";
import Clicked from "../images/likeButtonRed.svg";
import CommentNotClicked from "../images/commentButtonTransparent.svg";
import CommentClicked from "../images/commentButtonRed.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

//style buat react link
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  transition: 0.1s;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    font-size: 20px;
  }
`;

//nanti diganti pas pakai JWT
const temporaryUserId = "dhila";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfLikes: this.props.data.likedThread.split(",").length,
      usersWhoLikedTheQuestion: this.props.data.likedThread.split(","),
      likeButtonClicked: false,
      comments: []
    };
  }

  componentDidMount() {
    this.setState({
      likeButtonClicked: this.state.usersWhoLikedTheQuestion.includes(
        temporaryUserId
      )
        ? true
        : false
    });
  }

  toggleCommentButton = () => {
    document.getElementById(`comments-box-${this.props.data.id}`).style.height =
      "200px";
     
    axios
    .get(`http://localhost:4000/comments/${this.props.data.id}`)
    .then(response => {
      this.setState({
        comments: response.data
      })
      console.log(response.data);
    })
    .catch(error => console.log(error)); 
  };

  
  toggleLikeButton = () => {
    const incrementValue = this.state.likeButtonClicked ? -1 : 1;
    let users = this.state.usersWhoLikedTheQuestion;

    if (this.state.likeButtonClicked) {
      users.splice(users.indexOf(temporaryUserId), 1);
    } else {
      users.push(temporaryUserId);
    }

    console.log(users);
    this.setState({
      likeButtonClicked: !this.state.likeButtonClicked,
      numberOfLikes: this.state.numberOfLikes + incrementValue
    });

    axios
      .put(`http://localhost:4000/threads/${this.props.data.id}`, {
        questionId: this.props.data.id,
        usersId: users.toString(),
        userId: temporaryUserId
      })

      .then(response => {
        console.log("Question is liked!");
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="question" key={this.props.data.id}>
        <StyledLink
          to={`/threads/${this.props.data.id}`}
          style={{ textDecoration: "none" }}
        >
          <h2 className="question-title"> {this.props.data.title}</h2>
        </StyledLink>
        <h4> {this.props.data.input}</h4>
        <img
          alt="like-button"
          id="like-button"
          className="question-button"
          src={this.state.likeButtonClicked ? Clicked : NotClicked}
          onClick={this.toggleLikeButton}
        />
        <span>{this.state.numberOfLikes}</span>
        <img
          alt="comment-button"
          id="comment-button"
          className="question-button"
          src={CommentNotClicked}
          onClick={this.toggleCommentButton}
        />
        <div className="comments-box" id={`comments-box-${this.props.data.id}`}>
          {this.state.comments.map((comment,index) => (
              <h4>
                {comment.firstName} {comment.comment}
              </h4>
          ))}
        </div>
      </div>
    );
  }
}

export default Question;
