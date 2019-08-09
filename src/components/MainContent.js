import React from "react";
import axios from "axios";
import Question from "./Question";
import { css } from "@emotion/core";
import FadeLoader from "react-spinners/ScaleLoader";

const override = css`
    position: fixed;
    top: 30vh;
    left: 45vw;
    border-color: red;
`;

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            isLoading: true,
            likedThread: []
        };
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });

        axios
            .get(`${process.env.REACT_APP_API_URL}/threads`)
            .then((response) => {
                // handle success
                this.setState({
                    isLoading: false,
                    questions: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(function() {
                // always executed
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className='sweet-loading'>
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
                <div id='questions'>
                    {this.state.questions.map((question, index) => {
                        return (
                            <Question key={index} id={index} data={question} />
                        );
                    })}
                </div>
            );
        }
    }
}

export default MainContent;
