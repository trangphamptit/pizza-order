import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../image/logo.jpg";
// import HeaderTop from "./HeaderTop";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-container">
          <div className="menu-wrap">
            <input type="checkbox" className="toggler" />
            <div className="hamburger">
              <div />
            </div>
            <div className="menu">
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
            <img src={logo} />
          </div>
          <div className="cart">
            <button type="button">
              <i class="fas fa-cart-arrow-down" />
            </button>
          </div>
        </div>

        {/* <HeaderTop /> */}
      </div>
    );
  }
}

export default Header;
