import React, { Component } from "react";
import "./UserProfile.scss";
import Tabs from "./Tabs";
import userimg from "../../image/userimg.jpg";
class UserProfile extends Component {
  render() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      return (
        <div className="profile col-10">
          <Tabs>
            <div label="your profile">
              <img className="user-img" src={userimg} alt="user" />
              <h4>user name</h4>
              <label className="name">{user.name}</label>
              <h4>email</h4>
              <label className="email">{user.email}</label>
              <h4>phone number</h4>
              <label className="phone">{user.phone}</label>
            </div>
            <div label="order history">your orders</div>
          </Tabs>
        </div>
      );
    } else {
      return (
        <div className="profile col-10">
          <h1>You don't have account</h1>
        </div>
      );
    }
  }
}

export default UserProfile;
