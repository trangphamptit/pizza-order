import React, { Component } from "react";
import { Form, Field, ErrorMessage, withFormik } from "formik";
import * as yup from "yup";
import "./Login.scss";
import { Link } from "react-router-dom";
class Login extends Component {
  render() {
    return (
      <Form className="loginform col-12 col-md-8 col-lg-8 col-sm-12">
        <h1 className="login-title">LOGIN </h1>
        <label for="username">
          <b>Username</b>
        </label>
        <Field type="text" name="username" placeholder="username" />
        <div className="error">
          <ErrorMessage name="username" />
        </div>

        <label for="pass">
          <b>Password</b>
        </label>
        <Field type="text" name="password" placeholder="password" />
        <div className="error">
          <ErrorMessage name="password" />
        </div>

        <button type="submit" onClick={this.handleSubmit}>
          {" "}
          Submit{" "}
        </button>

        <div className="login-footer">
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <span class="forgot">
            Forgot <Link to="/">password?</Link>
          </span>
        </div>
      </Form>
    );
  }
}

const LoginValidation = yup.object().shape({
  username: yup.string().required(),
  password: yup
    .string()
    .min(8)
    .max(16)
    .required()
});

const FormikForm = withFormik({
  handleSubmit: (values, { setSubmitting }) => {
    console.log("Submitted username:", values.username);
    console.log("Submitted Password:", values.password);
    // Simulates the delay of a real request
    setTimeout(() => setSubmitting(false), 3 * 1000);
  },
  validationSchema: LoginValidation
})(Login);
export default FormikForm;
