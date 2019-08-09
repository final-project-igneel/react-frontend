import axios from "axios";
import React from "react";
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


class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/FAQ`)
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
      <div id="FAQs">
        <h1>F.A.Q</h1>
        <div>
          {this.state.questions.map(question => {
            return <StyledLink to={`/FAQ/${question.question_id}`} style={{ textDecoration: 'none' }}><p id="FAQ"> {question.question}</p></StyledLink>
          })}
        </div>
      </div>
    );
  }
}

export default FAQ;
