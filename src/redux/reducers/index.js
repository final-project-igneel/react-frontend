import { combineReducers } from "redux";
import signinReducer from "./signin";
import signupReducer from "./signup";
import threads from "./threads";
import { createThread, createComment } from "./create";

const rootReducers = combineReducers({
    signin: signinReducer,
    signup: signupReducer,
    threads,
    createThread,
    createComment
});

export default rootReducers;
