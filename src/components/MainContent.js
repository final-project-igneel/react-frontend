import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "@emotion/core";
import FadeLoader from "react-spinners/ScaleLoader";

const override = css`
    position: fixed;
    top: 30vh;
    left: 45vw;
    border-color: red;
`;

<<<<<<< HEAD
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
`;

=======
>>>>>>> b8380db596f9f64adf4baef4cce4847f6dbe3578
class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            isLoading: true
        };
    }

<<<<<<< HEAD
    componentDidMount() {
=======
    axios
      .get(`http://gadget-fraqs.herokuapp.com/threads`)
      .then(response => {
        // handle success
        console.log(response.data);
>>>>>>> b8380db596f9f64adf4baef4cce4847f6dbe3578
        this.setState({
            isLoading: true
        });
<<<<<<< HEAD
=======
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }
>>>>>>> b8380db596f9f64adf4baef4cce4847f6dbe3578

        axios
            .get(`http://localhost:4000/threads`)
            .then(response => {
                // handle success
                this.setState({
                    isLoading: false,
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
                <div id="questions">
                    {this.state.questions.map(question => {
                        return (
                            <div className="question">
                                <StyledLink
                                    to={`/threads/${question.id}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <h2 className="question-title">
                                        {" "}
                                        {question.title}
                                    </h2>
                                </StyledLink>
                                <h4> {question.input}</h4>
                            </div>
                        );
                    })}
                </div>
            );
        }
    }
}

export default MainContent;
