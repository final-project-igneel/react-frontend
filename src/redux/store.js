import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducers from "./reducers";

const composeEnhancers =
    process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

export default function configureStore(preloadedState) {
    const store = createStore(rootReducers, preloadedState, enhancer);
    return store;
}
