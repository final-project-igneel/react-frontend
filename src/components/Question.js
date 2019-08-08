import React from "react";
import NotClicked from "../images/likeButtonTransparent.svg";
import Clicked from "../images/likeButtonRed.svg";
import CommentNotClicked from "../images/commentButtonTransparent.svg";
import CommentClicked from "../images/commentButtonRed.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Comment from "./Comment";

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

let temporaryUserId = '-1'//nanti diganti pas pakai JWT
if(JSON.parse(localStorage.getItem('user-id'))!=null) {
  temporaryUserId = parseInt(JSON.parse(localStorage.getItem('user-id')))
}

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.getUpdatedCommentBox = this.getUpdatedCommentBox.bind(this);
    this.state = {
      numberOfLikes: this.props.data.likedThread.split(",").length - 1,
      numberOfComments: 0,
      usersWhoLikedTheQuestion: this.props.data.likedThread.split(","),
      likeButtonClicked: false,
      commentButtonClicked: false,
      comments: [],
      commentBoxText: ""
    };
  }

  componentDidMount() {
    console.log(this.state.usersWhoLikedTheQuestion) 
    console.log(temporaryUserId)
    this.getCommentData();
    this.setState({
      likeButtonClicked: this.state.usersWhoLikedTheQuestion.includes(
        String(temporaryUserId)
      )
        ? true
        : false
    });
  }

  getUpdatedCommentBox() {
    this.getCommentData();
  }

  getCommentData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/comments/${this.props.data.id}`)
      .then(response => {
        this.setState({
          comments: response.data.commentData.filter(
            question => question.threadid === this.props.data.id
          )
        });
      })
      .then(() => {
        this.setState({
          numberOfComments: this.state.comments.length
        });
      })
      .catch(error => console.log(error));
  };

  toggleCommentButton = () => {
    const height = this.state.commentButtonClicked ? "0" : "300px";
    document.getElementById(
      `comments-box-${this.props.data.id}`
    ).style.height = height;

    this.setState({
      commentButtonClicked: !this.state.commentButtonClicked
    });

    this.getCommentData();
    console.log(this.props.data)
  };

  toggleLikeButton = () => {
    const incrementValue = this.state.likeButtonClicked ? -1 : 1;
    let users = this.state.usersWhoLikedTheQuestion;

    if (this.state.likeButtonClicked) {
      users.splice(users.indexOf(temporaryUserId), 1);
    } else {
      users.push(temporaryUserId);
    }

    this.setState({
      likeButtonClicked: !this.state.likeButtonClicked,
      numberOfLikes: this.state.numberOfLikes + incrementValue
    });

    axios
      .put(`${process.env.REACT_APP_API_URL}/threads/${this.props.data.id}`, {
        questionId: this.props.data.id,
        usersId: users.toString(),
        userId: temporaryUserId
      })

      .then(response => {
        
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
        <span className="numberOfLikes">{this.state.numberOfLikes}</span>
        <img
          alt="comment-button"
          id="comment-button"
          className="question-button"
          src={
            this.state.commentButtonClicked ? CommentClicked : CommentNotClicked
          }
          onClick={this.toggleCommentButton}
        />
        <span className="numberOfLikes">{this.state.numberOfComments}</span>
        <Comment
          threadid={this.props.data.id}
          userid={temporaryUserId}
          commentsData={this.state.comments}
          getUpdatedCommentBox={this.getUpdatedCommentBox}
        />
      </div>
    );
  }
}

export default Question;
