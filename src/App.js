import React, { Component } from "react";

import "./App.css";
import Home from "./views/Home/Home";
import UserProfile from "./views/UserProfile";
import Cart from "./views/Cart/Cart";
import Details from "./views/Details/Details";
import ListCategory from "./views/ListCategory/ListCategory";
import Products from "./views/Products/Products";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ContainerPage from "./containerpage/ContainerPage";

class App extends Component {
  render() {
    return (
      <Router>
        <ContainerPage>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/userprofile" component={UserProfile} />
              <Route path="/cart" component={Cart} />
              <Route path="/details" component={Details} />
              <Route path="/listcategory" component={ListCategory} />
              <Route path="/products" component={Products} />
            </Switch>
          </div>
        </ContainerPage>
      </Router>
    );
  }
}

export default App;
