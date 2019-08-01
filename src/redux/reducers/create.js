const initialState = {
    latestResponse: null,
    latestError: null,
    isLoading: false,
    success: false
};

const createThread = (state = initialState, action) => {
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
