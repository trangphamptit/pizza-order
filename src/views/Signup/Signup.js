import React, { Component } from "react";
import { Form, ErrorMessage, withFormik } from "formik";
import * as yup from "yup";
import "./Signup.scss";
import { apiLinks } from "../../services/APILinks";
import axios from "axios";
class Signup extends Component {
  render() {
    return (
      <Form
        className="signupform col-xl-8 col-md-8 col-lg-8 col-sm-12"
        onSubmit={this.props.handleSubmit}
      >
        <h1 className="signup-title">SIGN UP </h1>
        <input
          type="text"
          name="name"
          placeholder="your full name"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="name" />
        </div>
        <input
          type="email"
          name="email"
          placeholder=" your email"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="email" />
        </div>

        <input
          type="text"
          name="phone"
          placeholder="your phone number"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="phone" />
        </div>

        <input
          type="password"
          name="password"
          placeholder="your password(min 6 characters)"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="password" />
        </div>
        <input
          type="password"
          name="passwordconfirm"
          placeholder="repeat your password"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="passwordconfirm" />
        </div>

        <div className="signup-footer">
          <button type="submit" onClick={this.props.handleSubmit}>
            {" "}
            Submit{" "}
          </button>

          <button type="submit" className="cancelbtn">
            Cancel
          </button>
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
  phone: yup.string().required(),
  password: yup
    .string()
    .min(6)
    .max(16)
    .required(),

  passwordconfirm: yup.string().oneOf([yup.ref("password"), null])
});

const FormikForm = withFormik({
  mapPropsToValues: () => {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      passwordconfirm: ""
    };
  },

  handleSubmit: (values, { setSubmitting }) => {
    // console.log("Submitted username:", values);

    let signupLink = apiLinks.signup;

    axios
      .post(signupLink, {
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
        dob: "1/1/2019"
      })
      .then(function(response) {
        console.log(response);
        console.log("Authenticated");
      })
      .catch(function(error) {
        console.log("Error on Authentication");
      });
    // Simulates the delay of a real request
    setTimeout(() => setSubmitting(false), 3 * 1000);
  },
  validationSchema: SignupValidation
})(Signup);
export default FormikForm;
