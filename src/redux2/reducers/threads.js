const initialState = {
    threadList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_THREAD":
            return {
                ...state,
                threadList: action.payload
            };
        default:
            return state;
    }
};
