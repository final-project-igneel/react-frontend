const initialState = {
    latestResponse: null,
    latestError: null,
    isLoading: false,
    success: false
};

export const createThread = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_THREAD_BEGIN": {
            return {
                ...state,
                isLoading: true,
                latestError: null
            };
        }
        case "CREATE_THREAD_SUCCESS": {
            return {
                ...state,
                isLoading: false,
                latestResponse: action.payload.response,
                success: true
            };
        }
        case "CREATE_THREAD_ERROR": {
            return {
                ...state,
                isLoading: false,
                latestError: action.payload.error,
                latestResponse: null
            };
        }
        default:
            return state;
    }
};

export default createThread;
export const createComment = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_COMMENT_BEGIN": {
            return {
                ...state,
                isLoading: true,
                latestError: null
            };
        }
        case "CREATE_COMMENT_SUCCESS": {
            return {
                ...state,
                isLoading: false,
                latestResponse: action.payload.response,
                success: true
            };
        }
        case "CREATE_COMMENT_ERROR": {
            return {
                ...state,
                isLoading: false,
                latestError: action.payload.error,
                latestResponse: null
            };
        }
        default:
            return state;
    }
};
