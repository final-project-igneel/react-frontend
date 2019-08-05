import { combineReducers } from "redux";
import threads from "./threads";

const rootReducers = combineReducers({
    threads,
});

export default rootReducers;
