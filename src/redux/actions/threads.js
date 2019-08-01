import axios from "axios";

const fetchThread = () => dispatch => {
    axios
        .get(`${process.env.REACT_APP_API_URL}/threads`)
        .then(res =>
            dispatch(
                {
                    type: "FETCH_THREAD",
                    payload: res.data.threads
                },
                console.log(res.data.threads)
            )
        )
        .catch(err => console.log(err));
};

export default fetchThread;
