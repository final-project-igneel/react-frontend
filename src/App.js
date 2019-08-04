import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import QAPage from "./components/QAPage";
import FAQPage from "./components/FAQPage";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={"/"} component={SignupPage} />
                        <Route exact path={"/Login"} component={LoginPage} />
                        <Route path={"/Main"} component={MainPage} />
                        <Route path={"/FAQ/:id"} component={FAQPage} />
                        <Route path={"/threads/:id"} component={QAPage} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        </Provider>
    );
}

export default App;
