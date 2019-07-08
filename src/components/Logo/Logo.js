import React from "react";
import logo from "../../image/logo.jpg";
import "./Logo.scss";
function Logo() {
  return (
    <div>
      <img className="header-logo" src={logo} />
    </div>
  );
}
export default Logo;
