import axios from "axios";
import React from "react";
import NavBar from './NavBar';
class QAPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios
      .get(`${process.env.REACT_APP_API_URL}/FAQ/${id}`)
      .then(response => {
        // handle success
        this.setState({
          question: response.data
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
    console.log(this.state.question.question);
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
      <div id="question-container">
        {this.state.question.map(Question => {
          return (
              <React.Fragment>
                <h1 id="question"> {Question.question}</h1>
                <h3 id="answer"> {Question.answer}</h3>
              </React.Fragment>
          );
        })}
      </div>
      </React.Fragment>
    );
  }
}

export default QAPage;
