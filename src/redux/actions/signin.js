import axios from "axios";
import { message } from "antd";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
export const signin = (data) => {
    return (dispatch) => {
        axios
            .post(`${process.env.REACT_APP_API_URL}/users/signin`, data)
            .then((res) => {
                console.log(res);

               
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
            }).then(() => {
                history.push("/Main");
                window.location.reload();
            })
            .catch((err) => {
                // console.log(err);
                message.error("signin failed", 1);
            });
    };
};
