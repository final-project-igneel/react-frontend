import axios from "axios";
import { message } from "antd";

export const signin = data => dispatch => {
    axios
        .post(`${process.env.REACT_APP_API_URL}/users/signin`, data)
        .then(res => {
            // window.localStorage.token = res.data.token;
            // dispatch({
            //     type: "signin",
            //     payload: {
            //         token: res.data.token,
            //         email: res.data.user.email,
            //         name: res.data.user.firstName
            //     }
            // });
            // console.log(res);
            // message.success(`signin succeed as ${res.data.user.firstName}`, 1);
        })
        .catch(err => {
            console.log(err);
            message.error("signin failed", 1);
        });
};
