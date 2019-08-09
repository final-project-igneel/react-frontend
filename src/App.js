import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import QAPage from "./components/QAPage";
import FAQPage from "./components/FAQPage";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import { Provider } from "react-redux";
<<<<<<< HEAD

import UserProfile from './components/UserProfile';
=======
import CategoryPage from './components/CategoryPage'
>>>>>>> 613e05646a4a868f2f6a849008456939a5fcb7d7
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
                        <Route path={"/FAQ/:id"} component={FAQPage} />
                        <Route path={"/threads/:id"} component={QAPage} />
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
