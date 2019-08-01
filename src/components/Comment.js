import React from "react";
import axios from "axios";

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
    axios
      .post(`http://localhost:4000/comments/create`, {
        userid: this.props.userid,
        threadid: this.props.threadid,
        comment: this.state.commentBoxText
      })

      .then(response => {
        response.status(200);   
      })
      .catch(error => console.log(error));
      document.getElementById('comment-textarea').value = '';  
      this.props.getUpdatedCommentBox();
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="comments-box"
          id={`comments-box-${this.props.threadid}`}
        >
          {this.props.commentsData.map((comment, index) => (
            <div key={index} className="individual-comment">
              <div className="comments-firstname">
                <b>{comment.user.firstName}</b>
              </div>
              {/* <hr /> */}
              <div className="comments-comment">{comment.comment}</div>
            </div>
          ))}
        </div>
        <div className="input-comment-container">
          <form onSubmit={this.handleFormSubmit}>
            <textarea
              onChange={this.handleChange}
              placeholder="Be the first to comment"
              className="input-comment"
              id='comment-textarea'
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
