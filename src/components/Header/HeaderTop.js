import React, { Component } from "react";
import "./HeaderTop.scss";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
class HeaderTop extends Component {
  render() {
    return (
      <div className="headerTop">
        <div />
        <div className="logo">
          <Logo />
        </div>
        <div className="cart">
          <Link to="/cart">
            <Button>
              {/* <span className="mr-2">
                <i className="fas fa-cart-plus" />
              </span>
              Your cart */}
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default HeaderTop;
