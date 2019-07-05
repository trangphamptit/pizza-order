import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../image/logo.png";
import avatar from "../../image/avatar.png";
import { AppContext } from "../../services/AppContext";
import { loadOptions } from "@babel/core";
class Header extends Component {
  constructor(props) {
    super(props);
    let user = JSON.parse(localStorage.getItem("user"));
    this.state = { user };
  }

  componentDidMount() {
    if (this.state.user) {
      this.context.setLoginState(true);
    }
  }

  unchecked() {
    let element = document.getElementById("toggler");
    // console.log(element.checked);
    if (element.checked) {
      element.checked = false;
    }
  }

  render() {
    console.log("render header");
    const { cart, setLoginState } = this.context;
    return (
      <div className="header-container col-12">
        <div className="menu-wrap">
          <input type="checkbox" id="toggler" />
          <div className="hamburger">
            <div />
          </div>
          <div className="menu" onClick={this.unchecked}>
            <div>
              <div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/listcategory">Category</Link>
                  </li>
                  <li>
                    <Link to="/userprofile">Profile</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="header-right">
          {this.context.isLogin === true ? (
            <div className="user">
              <i class="fas fa-user-circle" />
              <span>Hello, {this.state.user.name}</span>

              <div
                className="signup-header"
                onClick={() => {
                  localStorage.removeItem("user");
                  this.context.setLoginState(false);
                }}
              >
                logout{" "}
              </div>
            </div>
          ) : (
            <div className="user">
              <i class="fas fa-user-circle" />{" "}
              <Link to="/login">
                {" "}
                <span className="login-header">login </span>
              </Link>{" "}
              /{" "}
              <Link to="/signup">
                {" "}
                <span className="signup-header">signup </span>
              </Link>
            </div>
          )}

          <div className="cart">
            <Link to="/cart">
              <i className="fas fa-cart-arrow-down" />

              <span className="number-item"> {cart.length}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Header.contextType = AppContext;

export default Header;
