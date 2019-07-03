import React, { Component } from "react";
import "./UserProfile.scss";
class UserProfile extends Component {
  render() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    return (
      <div className="profile">
        <h1>your profile</h1>
        <h4>user name</h4>
        <p className="name">{user.name}</p>
        <h4>email</h4>
        <p className="email">{user.email}</p>
        <h4>phone number</h4>
        <p className="phone">{user.phone}</p>
      </div>
    );
  }
}

export default UserProfile;
