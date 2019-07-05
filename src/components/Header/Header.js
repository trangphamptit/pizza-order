import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../image/logo.png";
import avatar from "../../image/avatar.png";
import { AppContext } from "../../services/AppContext";
class Header extends Component {
  unchecked() {
    let element = document.getElementById("toggler");
    // console.log(element.checked);
    if (element.checked) {
      element.checked = false;
    }
  }

  render() {
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
          <div className="user">
            <i class="fas fa-user-circle" />
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

          <AppContext.Consumer>
            {({ cart }) => (
              <div className="cart">
                <Link to="/cart">
                  <i className="fas fa-cart-arrow-down" />

                  <span className="number-item"> {cart.length}</span>
                </Link>
              </div>
            )}
          </AppContext.Consumer>
        </div>
      </div>
    );
  }
}

export default Header;
