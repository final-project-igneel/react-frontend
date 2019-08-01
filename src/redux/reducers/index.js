import { combineReducers } from "redux";
import signinReducer from "./signin";
import signupReducer from "./signup";
import threads from "./threads";
import createThread from "./create";

const rootReducers = combineReducers({
    signin: signinReducer,
    signup: signupReducer,
    threads,
    createThread
});

export default rootReducers;
