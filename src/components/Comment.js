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
    if(this.state.commentBoxText === "") {
      alert('Please enter something before submitting comment')
    } else {
      console.log(this.state.commentBoxText)
      axios
        .post(`http://localhost:4000/comments/create`, {
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
          },1000)
          //   elem.scrollIntoView({behavior: "smooth"})
          // .then(() => this.el.scrollIntoView({behavior: "smooth"}))
        })
        .catch(error => console.log(error));
  
      var elems = document.getElementsByClassName("input-comment");
      for (var i = 0; i < elems.length; i += 1) {
        elems[i].value = "";
        this.setState({
          commentBoxText: ""
        })
      }
    }
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
              <div className="comments-comment">{comment.comment}</div>
              <div ref={el => this.el = el} />
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
