import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentButtonClicked: false,
      commentBoxText: ""
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      commentBoxText: event.target.value
    });
  };

  handleFormSubmit = () => {
    if (this.state.commentBoxText === "") {
      alert("Please enter something before submitting comment");
    } else {
      console.log(this.state.commentBoxText);
      axios
        .post(`${process.env.REACT_APP_API_URL}/comments/create`, {
          userid: this.props.userid,
          threadid: this.props.threadid,
          comment: this.state.commentBoxText
        })

        .then(async () => {
          await this.props.getUpdatedCommentBox();

          const elem = document.getElementById(
            `comments-box-${this.props.threadid}`
          );
          setTimeout(() => {
            elem.scrollTop = elem.scrollHeight;
          }, 1000);
        })
        .catch(error => console.log(error));

      var elems = document.getElementsByClassName("input-comment");
      for (var i = 0; i < elems.length; i += 1) {
        elems[i].value = "";
        this.setState({
          commentBoxText: ""
        });
      }
    }
  };

  render() {
    console.log(this.props.commentsData)
    return (
      <React.Fragment>
        <div
          className="comments-box"
          id={`comments-box-${this.props.threadid}`}
        >
          {this.props.commentsData.map((comment, index) => (
            <div key={index} className="individual-comment">
              {comment.user.id === this.props.userid && (
                <button
                  className="delete-question-button"
                  onClick={() => {
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
                          "Your comment has been deleted.",
                          "success"
                        ).then(res => {
                          window.location.reload();
                        });
                        axios
                          .delete(
                            `${process.env.REACT_APP_API_URL}/comments/delete/${
                              comment.id
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
                  }}
                >
                  X
                </button>
              )}
              <div className="comments-firstname">
                {comment.user !== null && <b>{comment.user.firstName}</b>}
              </div>
              <div className="comments-comment">{comment.comment}</div>
              <div ref={el => (this.el = el)} />
            </div>
          ))}
        </div>
        <div className="input-comment-container">
          <form onSubmit={this.handleFormSubmit}>
            <textarea
              onChange={this.handleChange}
              placeholder="Be the first to comment"
              className="input-comment"
              type="text"
            />
            <div className="comment-submit-button-area">
              <button
                onClick={this.handleFormSubmit}
                type="button"
                className="comment-submit-button"
              >
                Comment
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Comment;
