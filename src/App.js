import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import ChocolatesList from "./components/ChocolatesList";
import Brands from "./components/Brands";
import SignUp from "./components/SignUp";
import ChocolateDetail from "./components/ChocolateDetail";
import BrandDetail from "./components/BrandDetail";
import SearchComponent from "./components/SearchComponent";
import Login from "./components/Login";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/login" />} />
        <Route path="/home" exact component={Home} />
        <Route path="/chocolates" exact component={ChocolatesList} />
        <Route path="/brands" exact component={Brands} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/chocolates/:id" exact component={ChocolateDetail} />
        <Route path="/brands/:id" exact component={BrandDetail} />
        <Route path="/search" component={SearchComponent} />
        <Route path="/login" component={Login} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
