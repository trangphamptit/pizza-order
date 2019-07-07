import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../image/logo.png";
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
    const { user, cart, logout } = this.context;
    return (
      <div className="header col-12">
        <div className="logo">logo</div>
        <div className="header-right">
          <ul className="navbar">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              {" "}
              <Link to="/">category</Link>
            </li>
            <li>
              {" "}
              <Link to="/">profile</Link>
            </li>
            <li>
              {" "}
              <Link to="/">about us</Link>{" "}
            </li>
            <li>
              {" "}
              <i className="fas fa-user-circle" />
            </li>
            <li>
              {" "}
              <i className="fas fa-cart-arrow-down" />
            </li>
          </ul>
        </div>

        {/* <div className="menu-wrap">
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
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header-right">
          {user && user.name ? (
            <div className="user">
              <i className="fas fa-user-circle" />
              <span>Hello, {user.name} </span>

              <div
                className="logout"
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                }}
              >
                logout
              </div>
            </div>
          ) : (
            <div className="user">
              <i className="fas fa-user-circle" />{" "}
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
        </div> */}
      </div>
    );
  }
}

Header.contextType = AppContext;

export default Header;
