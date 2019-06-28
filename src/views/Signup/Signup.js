import React, { Component } from "react";
import { Form, Field, ErrorMessage, withFormik } from "formik";
import * as yup from "yup";
import "./Signup.scss";
class Signup extends Component {
  render() {
    return (
      <Form className="signupform col-12 col-md-8 col-lg-8 col-sm-12">
        <h1 className="signup-title">SIGN UP </h1>
        <Field type="text" name="name" placeholder="your full name" />
        <div className="error">
          <ErrorMessage name="name" />
        </div>
        <Field type="email" name="email" placeholder=" your email" />
        <div className="error">
          <ErrorMessage name="email" />
        </div>
        <Field type="date" name="birthday" placeholder="your birthday" />
        <div className="error">
          <ErrorMessage name="birthday" />
        </div>
        <Field type="number" name="phone" placeholder="your phone number" />
        <div className="error">
          <ErrorMessage name="phone" />
        </div>

        <Field
          type="password"
          name="password"
          placeholder="your password(min 6 characters)"
        />
        <div className="error">
          <ErrorMessage name="password" />
        </div>
        <Field
          type="password"
          name="password"
          placeholder="repeat your password"
        />
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
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </Form>
    );
  }
}

const SignupValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .email("invalid email")
    .required(),
  birthday: yup.string().required(),
  phone: yup.string().required(),
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
  validationSchema: SignupValidation
})(Signup);
export default FormikForm;
