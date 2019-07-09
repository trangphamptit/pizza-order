import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../image/logo-pizza.png";
import { AppContext } from "../../services/AppContext";

class Header extends Component {
  unchecked() {
    let element = document.getElementById("toggler");
    // console.log(element.checked);
    if (element.checked) {
      element.checked = false;
    }
  }
  getType(cart) {
    let num = cart.reduce((numOfProduct, item) => {
      if (item.type === "pizza") {
        return numOfProduct + item.quantity;
      } else {
        return numOfProduct;
      }
    }, 0);
    // console.log("type", type);
    console.log("numOfProduct ", num);
    return <span className="number-item"> {num}</span>;
  }
  render() {
    const { user, cart, logout } = this.context;

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
                  <li>
                    <Link to="/about">About us</Link>
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
              <span className="user-item">Hello, {user.name} </span>

              <div
                className="user-item logout"
                onClick={e => {
                  e.preventDefault();
                  logout();
                }}
              >
                logout
              </div>
            </div>
          ) : (
            <div className="user">
              <Link to="/login">
                {" "}
                <span className="user-item login-header">login </span>
              </Link>{" "}
              /{" "}
              <Link to="/signup">
                {" "}
                <span className="user-item signup-header">signup </span>
              </Link>
            </div>
          )}

          <div className="cart">
            <Link to="/cart">
              <i className="fas fa-cart-arrow-down" />

              {this.getType(cart)}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Header.contextType = AppContext;

export default Header;
