import React, { Component } from "react";
import { Form, ErrorMessage, withFormik } from "formik";
import * as yup from "yup";
import "./Delivery.scss";
import { apiLinks } from "../../services/APILinks";

class Delivery extends Component {
  render() {
    return (
      <Form
        className="deliveryform col-12 col-md-8 col-lg-8 col-sm-12"
        onSubmit={this.props.handleSubmit}
      >
        <h1 className="delivery-title">delivery </h1>
        <select
          name="district"
          value={this.props.values.district}
          onChange={this.props.handleChange}
          onBlur={this.props.handleBlur}
        >
          <option value="" label="Select province" />
          <option value="district1" label="district1" />
          <option value="district2" label="district2" />
          <option value="district3" label="district3" />
          <option value="district4" label="district4" />
          <option value="district5" label="district5" />
          <option value="district6" label="district6" />
          <option value="district7" label="district7" />
          <option value="district8" label="district8" />
          <option value="district9" label="district9" />
          <option value="district10" label="district10" />
          <option value="district11" label="district11" />
          <option value="district12" label="district12" />
        </select>
        <div className="error">
          <ErrorMessage name="district" />
        </div>

        <input
          type="text"
          name="housenumber"
          placeholder=" your house number"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="housenumber" />
        </div>

        <input
          type="text"
          name="streetname"
          placeholder=" your street name"
          onChange={this.props.handleChange}
        />
        <div className="error">
          <ErrorMessage name="streetname" />
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
  district: yup.string().required(),
  housenumber: yup.string().required(),
  streetname: yup.string().required(),
  time: yup.string().required()
});

const FormikForm = withFormik({
  mapPropsToValues: () => {
    return {
      district: "",
      housenumber: "",
      streetname: "",
      deliveryguide: "",
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
