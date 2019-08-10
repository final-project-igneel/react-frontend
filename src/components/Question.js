import React from "react";
import NotClicked from "../images/likeButtonTransparent.svg";
import Clicked from "../images/likeButtonRed.svg";
import CommentNotClicked from "../images/commentButtonTransparent.svg";
import CommentClicked from "../images/commentButtonRed.svg";
import axios from "axios";
import Comment from "./Comment";
import Swal from "sweetalert2";



let temporaryUserId = "-1"; //nanti diganti pas pakai JWT
if (JSON.parse(localStorage.getItem("user-id")) != null) {
  temporaryUserId = parseInt(JSON.parse(localStorage.getItem("user-id")));
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
      commentBoxText: "",
      askerId: 0,
      questionString: ""
    };
  }

  componentDidMount() {
    this.getCommentData();
    this.setState({
      likeButtonClicked: this.state.usersWhoLikedTheQuestion.includes(
        String(temporaryUserId)
      )
        ? true
        : false,
      questionString: this.props.data.title
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

      .then(response => {})
      .catch(error => console.log(error));
  };

  handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        Swal.fire(
          "Deleted!",
          "Your question has been deleted.",
          "success"
        ).then(res => {
          window.location.reload();
        });
        axios
          .delete(
            `${process.env.REACT_APP_API_URL}/threads/delete/${
              this.props.data.id
            }`
          )
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  };

  editQuestion = target => {
    Swal.fire({
      title: "Edit your question",
      inputValue: this.state.questionString,
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Confirm changes",
      showLoaderOnConfirm: true,
      preConfirm: (newText) => {
        axios
        .put(
          `${process.env.REACT_APP_API_URL}/threads/edit/${this.props.data.id}`,
          { newTitle: newText }
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
    .then(result => {
      if (result.value) {
        Swal.fire({
          title: `Your question has been updated`,
          imageUrl: result.value.avatar_url
        })
        .then(() => {
          window.location.reload()
        })
      }
    });
  };

  render() {
    return (
      <div className="question" key={this.props.data.id}>
        {this.props.data.userId === temporaryUserId && (
          <button
            className="delete-question-button"
            onClick={this.handleDelete}
          >
            X
          </button>
        )}
        {this.props.data.userId === temporaryUserId && (
          <h2
            className="question-title editable-question"
            onKeyPress={this.handleKeyPress}
            onClick={this.editQuestion}
            onMouseEnter={this}
            contentEditable={false}
          >
            {" "}
            {this.props.data.title}
          </h2>
        )}
        {this.props.data.userId !== temporaryUserId && (
          <h2 className="question-title" onKeyPress={this.handleKeyPress}>
            {" "}
            {this.props.data.title}
          </h2>
        )}
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
