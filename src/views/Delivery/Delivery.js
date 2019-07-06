import React, { Component } from "react";
import { Form, ErrorMessage, withFormik } from "formik";
import * as yup from "yup";
import "./Delivery.scss";

class Delivery extends Component {
  render() {
    return (
      <Form
        className="deliveryform col-12 col-md-8 col-lg-8 col-sm-12"
        onSubmit={this.props.handleSubmit}
      >
        <h1 className="delivery-title">delivery </h1>

        <input
          type="text"
          name="address"
          placeholder=" your address"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="address" />
        </div>

        <input
          type="text"
          name="guide"
          placeholder=" guide"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="guide" />
        </div>
        <input
          type="time"
          name="time"
          placeholder=" delivery time"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="time" />
        </div>

        <button type="submit" onClick={this.props.history.goBack}>
          {" "}
          Go back{" "}
        </button>
        <button type="submit" onClick={this.props.handleSubmit}>
          {" "}
          Submit{" "}
        </button>
      </Form>
    );
  }
}

const DeliveryValidation = yup.object().shape({
  guide: yup.string().required(),
  address: yup.string().required(),
  time: yup.string().required()
});

const FormikForm = withFormik({
  mapPropsToValues: () => {
    return {
      address: "",
      guide: "",
      time: ""
    };
  },

  handleSubmit: (values, { props, setSubmitting }) => {
    console.log("Submitted delivery:", values);
    let deliveryinfor = values;
    localStorage.setItem("deliveryinfor", JSON.stringify(deliveryinfor));
    props.history.push("/choosepayment");

    // Simulates the delay of a real request
    setTimeout(() => setSubmitting(false), 3 * 1000);
  },
  validationSchema: DeliveryValidation
})(Delivery);
export default FormikForm;
