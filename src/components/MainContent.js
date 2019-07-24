import React from "react";
import axios from "axios";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:4000/Questions`)
      .then(response => {
        // handle success
        this.setState({
          questions: response.data
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
    console.log(this.state.questions);
  }

  render() {
    return (
      <div id="questions">
        {this.state.questions.map(question => {
          return (
            <div className="question">
              <h2> {question.Question}</h2>
              <h4> {question.answer}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MainContent;
