import React, { Component } from "react";

import "./App.css";
import Home from "./views/Home/Home";
import UserProfile from "./views/UserProfile/UserProfile";

import Details from "./views/Details/Details";
import ListCategory from "./views/ListCategory/ListCategory";
import Products from "./views/Products/Products";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BestSeller from "./views/BestSeller/BestSeller";
import ContainerPage from "./containerpage/ContainerPage";
import Cart from "./views/Cart/Cart";
import BillForm from "./views/BillForm.js";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Delivery from "./views/Delivery/Delivery";
import ChoosePayment from "./views/Payment/ChoosePayment";
import VisaForm from "./views/Payment/VisaForm";
import AppProvider from "./services/AppContext";
import ProductsCategory from "./views/ProductsCategory/ProductsCategory";
class App extends Component {
  render() {
    return (
      <AppProvider>
        <BrowserRouter>
          <ContainerPage>
            {/* <div className="App"> */}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/userprofile" component={UserProfile} />

              {/* <Route path="/details" component={Details} /> */}
              <Route path="/details/:id" component={Details} />
              <Route path="/listcategory" component={ListCategory} />
              <Route path="/products" component={Products} />
              <Route path="/bestseller" component={BestSeller} />
              <Route path="/cart" component={Cart} />
              <Route path="/billform" component={BillForm} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/delivery" component={Delivery} />
              <Route path="/choosepayment" component={ChoosePayment} />
              <Route path="/visaform" component={VisaForm} />
              <Route
                path="/productscategory/:id"
                component={ProductsCategory}
              />
            </Switch>
            {/* </div> */}
          </ContainerPage>
        </BrowserRouter>
      </AppProvider>
    );
  }
}

export default App;
