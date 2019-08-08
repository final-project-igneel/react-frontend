import axios from "axios";
import { message } from "antd";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
export const signin = (data) => {
    return (dispatch) => {
        axios
            .post(`${process.env.REACT_APP_API_URL}/users/signin`, data)
            .then((res) => {
                window.localStorage.setItem('user-id',JSON.stringify(res.data.data.users.id))
                window.localStorage.setItem('user-firstName',JSON.stringify(res.data.data.users.firstName))
                dispatch({
                    type: "signin",
                    payload: {
                        token: res.data.token,
                        email: res.data.user.email,
                        name: res.data.user.firstName
                    }
                });
                message.success(`signin succeed as ${res.data.user.firstName}`, 1);
                history.push("/Main");
                window.location.reload();
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
