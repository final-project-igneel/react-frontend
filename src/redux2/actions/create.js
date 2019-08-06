import axios from "axios";

export const createThreadBegin = () => ({
    type: "CREATE_THREAD_BEGIN"
});

export const createThreadSuccess = response => ({
    type: "CREATE_THREAD_SUCCESS",
    payload: {
        response
    }
});

export const createThreadError = error => ({
    type: "CREATE_THREAD_ERROR",
    payload: {
        error
    }
});

export const createCommentBegin = () => ({
    type: "CREATE_COMMENT_BEGIN"
});

export const createCommentSuccess = response => ({
    type: "CREATE_COMMENT_SUCCESS",
    payload: {
        response
    }
});

export const createCommentError = error => ({
    type: "CREATE_COMMENT_ERROR",
    payload: {
        error
    }
});

export const createThread = payload => {
    return dispatch => {
        dispatch(createThreadBegin());
        axios
            .post(`${process.env.REACT_APP_API_URL}/threads/create`, payload)
            .then(response => {
                console.info("response:", response);
                dispatch(createThreadSuccess(response));
                return response;
            })
            .catch(error => {
                console.error("error:", error);
                dispatch(createThreadError(error));
            });
    };
};

export const createComment = payload => {
    return dispatch => {
        dispatch(createCommentBegin());
        axios
            .post(`${process.env.REACT_APP_API_URL}/comments/create`, payload)
            .then(response => {
                console.info("response:", response);
                dispatch(createCommentSuccess(response));
                return response;
            })
            .catch(error => {
                console.error("error:", error);
                dispatch(createCommentError(error));
            });
    };
};
