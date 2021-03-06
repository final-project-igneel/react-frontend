import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import { Provider } from "react-redux";

import UserProfile from './components/UserProfile';
import CategoryPage from './components/CategoryPage'
import AboutUs from './components/AboutUs';

import configureStore from './redux/store'

const store = configureStore()

function App() {
    return (
        <Provider store={store}>
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={"/"} component={SignupPage} />
                        <Route path={"/Login"} component={LoginPage} />
                        <Route path={"/main"} component={MainPage} />
                        <Route path={"/My_Profile"} component={UserProfile} />
                        <Route path={"/About_Us"} component={AboutUs} />
                        <Route path={'/category/:categoryName'} component={CategoryPage} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        </Provider>
    );
}

export default App;
