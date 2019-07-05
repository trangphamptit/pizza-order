import React, { Component } from "react";
import "./UserProfile.scss";
import Tabs from "./Tabs";
import userimg from "../../image/userimg.jpg";
class UserProfile extends Component {
  render() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    return (
      <div className="profile col-10">
        <Tabs>
          <div label="your profile">
            <img className="user-img" src={userimg} alt="user" />
            <h4>user name</h4>
            <p className="name">{user.name}</p>
            <h4>email</h4>
            <p className="email">{user.email}</p>
            <h4>phone number</h4>
            <p className="phone">{user.phone}</p>
          </div>
          <div label="order history">your orders</div>
        </Tabs>
        {/* <h1>your profile</h1>
        <h4>user name</h4>
        <p className="name">{user.name}</p>
        <h4>email</h4>
        <p className="email">{user.email}</p>
        <h4>phone number</h4>
        <p className="phone">{user.phone}</p> */}
      </div>
    );
  }
}

export default UserProfile;
