const initialState = {
    latestResponse: null,
    latestError: null,
    isLoading: false
};

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGNUP_USER_BEGIN": {
            return {
                ...state,
                latestError: null,
                isLoading: true
            };
        }
        case "SIGNUP_USER_SUCCESS": {
            return {
                ...state,
                isLoading: false,
                latestResponse: action.payload.response
            };
        }
        case "SIGNUP_USER_ERROR": {
            return {
                ...state,
                isLoading: false,
                latestError: action.payload.error,
                latestResponse: null
            };
        }
        default: {
            return state;
        }
    }
};

export default signupReducer;
