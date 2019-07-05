import React, { Component } from "react";
import { Form, Field, ErrorMessage, withFormik } from "formik";
import * as yup from "yup";
import "./Login.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiLinks } from "../../services/APILinks";
import { AppContext } from "../../services/AppContext";

class Login extends Component {
  render() {
    // console.log("context", this.context);
    // console.log("props", this.props);
    return (
      <Form className="loginform col-12 col-md-8 col-lg-8 col-sm-12">
        <h1 className="login-title">LOGIN </h1>
        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="email" />
        </div>

        <label for="pass">
          <b>Password</b>
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="password" />
        </div>

        <button type="submit" onClick={this.props.handleSubmit}>
          {" "}
          Login{" "}
        </button>

        <div className="login-footer">
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <span class="forgot">
            Forgot <Link to="/">password?</Link>
          </span>
          <span class="signup">
            <Link to="/signup">create acount</Link>
          </span>
        </div>
      </Form>
    );
  }
}

Login.contextType = AppContext;
const LoginValidation = yup.object().shape({
  email: yup.string().required(),
  password: yup
    .string()
    .min(6)
    .max(16)
    .required()
});
const FormikForm = withFormik({
  handleSubmit: (values, { props, setSubmitting }) => {
    // console.log("Submitted username:", values.username);
    console.log("Props:", props);

    let loginLink = apiLinks.login;
    const { email, password } = values;
    axios
      .post(loginLink, { email, password })
      .then(function(response) {
        if (response.data && response.data.email) {
          console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
          //TODO: handle setState of User
          window.location.href = `${window.location.protocol}//${
            window.location.host
          }`;
        } else {
          alert("email or password is wrong");
        }
      })
      .catch(function(error) {
        console.log(error);
      });

    // Simulates the delay of a real request
    setTimeout(() => setSubmitting(false), 3 * 1000);
  },
  validationSchema: LoginValidation
})(Login);

export default FormikForm;
