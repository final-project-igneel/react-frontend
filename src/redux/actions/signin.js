import axios from "axios";
// import { message } from "antd";
import { createBrowserHistory } from "history";
import Swal from "sweetalert2";
         
const history = createBrowserHistory();
export const signin = (data) => {
    return (dispatch) => {
        axios
            .post(`${process.env.REACT_APP_API_URL}/users/signin`, data)
            .then((res) => {
                // console.log(this.props)
                
                window.localStorage.setItem('user-id',JSON.stringify(res.data.data.users.id))
                window.localStorage.setItem('user-firstName',JSON.stringify(res.data.data.users.firstName))
                window.localStorage.setItem('user-lastName',JSON.stringify(res.data.data.users.lastName))
                window.localStorage.setItem('token',res.data.data.token)
                history.push("/main");
                window.location.reload();
                dispatch({
                    type: "signin",
                    payload: {
                        token: res.data.token,
                        email: res.data.user.email,
                        name: res.data.user.firstName
                    }
                });
                
            }).then(() => {
                history.push("/main");
                window.location.reload();
            })
            .catch((err) => {
                if(err.response.status === 401) {
                    Swal.fire({
                        title: "Oops!",
                        text: "The email/password combination doesn't match. Please check them again.",
                        type: "warning",
                        confirmButtonColor: "#de6e6e"
                      })
                }
            });
    };
};
