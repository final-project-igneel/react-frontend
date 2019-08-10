import axios from "axios";
import { message } from "antd";

export const signupUserBegin = () => ({
    type: "SIGNUP_USER_BEGIN"
});

export const signupUserSuccess = response => {
    return {
        type: "SIGNUP_USER_SUCCESS",
        payload: {
            response
        }
    };
};

export const signupUserError = error => ({
    type: "SIGNUP_USER_ERROR",
    payload: {
        error
    }
});

export const signupUser = payload => {
    return dispatch => {
        dispatch(signupUserBegin());
        axios
            .post(`${process.env.REACT_APP_API_URL}/users/signup`, payload)
            .then(response => {
                dispatch(signupUserSuccess(response));
                message.success("Signup success");
                return response;
            })
            .catch(error => {
                console.error("error: ", error);
                dispatch(signupUserError(error));
                message.error("Signup failed");
            });
    };
};
