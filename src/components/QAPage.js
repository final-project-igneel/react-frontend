import axios from "axios";
import React from "react";
import NavBar from "./NavBar";
import { css } from "@emotion/core";
import FadeLoader from 'react-spinners/ScaleLoader';

const override = css`
  position: fixed;
  margin-top: 30vh;
  margin-left: 45vw;
  border-color: red;
`;

class QAPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {},
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    const { id } = this.props.match.params;

    axios
      .get(`${process.env.REACT_APP_API_URL}/threads/${id}`)
      .then(response => {
        // handle success
        this.setState({
          question: response.data.data,
          isLoading: false
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
    console.log(this.state.question);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="sweet-loading">
          <FadeLoader
            css={override}
            sizeUnit={"px"}
            height={150}
            width={30}
            color={"#BC4646"}
            loading={this.state.loading}
          />
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <NavBar />
          <div id="question-container">
            <h1 id="question"> {this.state.question.title}</h1>
            <h3 id="answer"> {this.state.question.input}</h3>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default QAPage;
