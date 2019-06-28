import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../image/logo.png";
// import HeaderTop from "./HeaderTop";
class Header extends Component {
  unchecked() {
    let element = document.getElementById("toggler");
    console.log(element.checked);
    if (element.checked) {
      element.checked = false;
    }
    console.log(element);
  }

  render() {
    return (
      <div className="header">
        <div className="header-container">
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

          <div className="cart">
            <Link to="/cart">
              <button type="button">
                <i className="fas fa-cart-arrow-down" />
              </button>
            </Link>
          </div>
        </div>

        {/* <HeaderTop /> */}
      </div>
    );
  }
}

export default Header;
