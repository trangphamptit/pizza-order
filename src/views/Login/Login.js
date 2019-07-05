import React, { Component } from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import "./Login.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiLinks } from "../../services/APILinks";
import { AppContext } from "../../services/AppContext";

const LoginValidation = yup.object().shape({
  email: yup.string().required(),
  password: yup
    .string()
    .min(6)
    .max(16)
    .required()
});

const LoginForm = props => {
  return (
    <Form className="loginform col-12 col-md-8 col-lg-8 col-sm-12">
      <h1 className="login-title">LOGIN </h1>
      <label htmlFor="email">
        <b>Email</b>
      </label>
      <Field type="text" name="email" placeholder="email" component="input" />
      <div className="error">
        <ErrorMessage name="email" />
      </div>
      <label htmlFor="pass">
        <b>Password</b>
      </label>
      <Field
        type="password"
        name="password"
        placeholder="password"
        component="input"
      />
      <div className="error">
        <ErrorMessage name="password" />
      </div>

      <button type="submit">Login</button>

      <div className="login-footer">
        <button type="button" className="cancelbtn">
          Cancel
        </button>
        <span className="forgot">
          Forgot <Link to="/">password?</Link>
        </span>
        <span className="signup">
          <Link to="/signup">create acount</Link>
        </span>
      </div>
    </Form>
  );
};

class LoginContainer extends Component {
  initialValues = {
    email: "",
    password: ""
  };

  onSubmit = (values, actions) => {
    const { context: setLoginState } = this;
    const { login: loginLink } = apiLinks;
    const { email, password } = values;
    axios
      .post(loginLink, { email, password })
      .then(function(response) {
        if (response.data && response.data.email) {
          console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
          window.location.href = `${window.location.protocol}//${
            window.location.host
          }`;
          setLoginState(true);
        } else {
          alert("email or password is wrong");
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  };

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        onSubmit={this.onSubmit}
        validationSchema={LoginValidation}
        render={props => <LoginForm {...props} />}
      />
    );
  }
}

LoginContainer.contextType = AppContext;

export default LoginContainer;
