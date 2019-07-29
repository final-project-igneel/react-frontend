import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//style buat react link
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    transition: 0.1s;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover {
        font-size: 20px;
    }
`;

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
              <StyledLink
                to={`/Questions/${question.question_id}`}
                style={{ textDecoration: "none" }}
                >
                <h2 id="FAQ"> {question.question}</h2>
              </StyledLink>
                {/* <h4> {question.answer}</h4> */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default MainContent;
