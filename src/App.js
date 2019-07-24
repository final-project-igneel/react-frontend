import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MainPage from './components/MainPage';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import QAPage from "./components/QAPage";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact  path={"/"} component={MainPage} />
          <Route path={"/FAQ/:id"} component={QAPage} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
