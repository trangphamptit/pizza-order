import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

import { AppContext } from "../../services/AppContext";
import TemporaryDrawer from "./Header-res";
class Header extends Component {
  // unchecked() {
  //   let element = document.getElementById("toggler");
  //   // console.log(element.checked);
  //   if (element.checked) {
  //     element.checked = false;
  //   }
  // }

  render() {
    const { user, cart, logout } = this.context;
    return (
      <div className="header">
        <div className="header-container">
          <div className="logo">
            <Link to="/">logo</Link>
          </div>

          <div className="header-right">
            <ul className="navbar">
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                {" "}
                <Link to="/listcategory">category</Link>
              </li>
              <li>
                {" "}
                <Link to="/userprofile">profile</Link>
              </li>
              <li>
                {" "}
                <Link to="/">about us</Link>{" "}
              </li>
            </ul>

            <div className="user-nav">
              {user && user.name ? (
                <ul className="user-nav-account">
                  <li>
                    <i className="fas fa-user-circle" />
                  </li>
                  <li>Hello, {user.name} </li>
                  <li>/</li>
                  <li
                    className="logout"
                    onClick={e => {
                      e.preventDefault();
                      logout();
                    }}
                  >
                    logout
                  </li>
                </ul>
              ) : (
                <ul className="user-nav-account">
                  <li>
                    {" "}
                    <i className="fas fa-user-circle" />
                  </li>
                  <li>
                    {" "}
                    <Link to="/login">login</Link>
                  </li>
                  /
                  <li>
                    {" "}
                    <Link to="/signup">signup</Link>
                  </li>
                </ul>
              )}
            </div>

            <div className="cart-nav">
              <Link to="/cart">
                <i className="fas fa-cart-arrow-down" />

                <span className="number-item"> {cart.length}</span>
              </Link>
            </div>

            <div className="nav-res">
              <TemporaryDrawer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.contextType = AppContext;

export default Header;
