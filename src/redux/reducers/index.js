import { combineReducers } from "redux";
<<<<<<< HEAD
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
=======
import threads from "./threads";

const rootReducers = combineReducers({
    threads,
>>>>>>> b8380db596f9f64adf4baef4cce4847f6dbe3578
});

export default rootReducers;
