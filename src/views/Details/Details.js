import React, { Component } from "react";
import "./Details.scss";
import product1 from "../../image/product1.png";
import Axios from "axios";
import { Form, withFormik } from "formik";
import * as yup from "yup";
import { AppContext } from "../../services/AppContext";
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      details: {},
      toppings: []
    };
  }
  async componentDidMount() {
    try {
      const { data } = await Axios.get(
        `http://pizza-products.herokuapp.com/pizzas/${this.state.id}`
      );
      this.setState({ details: data });
    } catch (err) {
      console.log(err);
    }
    try {
      const { data } = await Axios.get(
        `http://pizza-products.herokuapp.com/toppings`
      );
      this.setState({ toppings: data });
      // console.log("topping", this.state.toppings);
    } catch (err) {
      console.log(err);
    }
  }

  handleSizeChange = event => {
    const value = event.target.value;
    const sizeObj = this.state.details.variantProducts.find(
      item => item.value === value
    );
    this.props.setFieldValue("size", sizeObj);
  };

  render() {
    const {
      _id,
      description,
      discountPrice,
      name,
      price,
      variantProducts
    } = this.state.details;
    if (_id) {
      return (
        <div className="detailpage container-fluid">
          <div className="row">
            <div className="detail-left col-12 col-sm-12 col-md-6 col-lg-6">
              <h1 className="name">{name}</h1>
              <p className="description">{description}</p>
              <img src={product1} alt="" className="image" />
            </div>

            <div className="detail-right col-12 col-sm-12 col-md-6 col-lg-6">
              <span className="price">{price} ₫</span>

              <Form className="select" onSubmit={this.props.handleSubmit}>
                <h4>Select size</h4>
                <div className="selectSize">
                  {/* select size */}
                  {variantProducts.map((variant, index) => {
                    console.log(variant);
                    return (
                      <div className="size" key={index}>
                        {" "}
                        <input
                          type="radio"
                          name="size"
                          onChange={this.handleSizeChange}
                          value={variant.value}
                          id={variant.value}
                        />
                        <label for={variant.value}>
                          {variant.value}-{variant.price}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className="error">{this.props.errors.size}</div>
                {/* select crust */}
                <h4>select crust</h4>

                <div className="selectCrust">
                  <div className="crust">
                    <input
                      type="radio"
                      name="crust"
                      value="thin"
                      id="thin"
                      onChange={this.props.handleChange}
                    />{" "}
                    <label htmlFor="thin">thin</label>
                  </div>
                  <div className="crust">
                    <input
                      type="radio"
                      name="crust"
                      value="normal"
                      id="normal"
                      onChange={this.props.handleChange}
                    />{" "}
                    <label htmlFor="normal">normal</label>
                  </div>
                  <div className="crust">
                    <input
                      type="radio"
                      name="crust"
                      value="thick"
                      id="thick"
                      onChange={this.props.handleChange}
                    />{" "}
                    <label htmlFor="thick">thick</label>
                  </div>
                </div>
                <div className="error">{this.props.errors.crust}</div>
                {/* add topping */}
                <h4>add topping</h4>
                <div className="addtopping">
                  {this.state.toppings.map((topping, index) => {
                    console.log(topping.name);
                    return (
                      <div className="topping" key={index}>
                        <input
                          type="checkbox"
                          name={`toppings${index}`}
                          value={topping.name}
                          id={topping.name}
                          onChange={this.props.handleChange}
                        />{" "}
                        <label for={topping.name}>{topping.name}</label>
                      </div>
                    );
                  })}
                </div>

                <AppContext.Consumer>
                  {value => (
                    <button
                      type="submit"
                      className="addtocart"
                      onClick={() => {
                        value.addToCart({
                          ...this.state.details,
                          order: this.props.values
                        });
                        console.log("details", this.state.details);
                        console.log(this.props.values);
                      }}
                    >
                      add to cart
                    </button>
                  )}
                </AppContext.Consumer>
              </Form>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Không tìm thấy sản phẩm</h1>;
    }
  }
}

// const DetailsValidation = yup.object().shape({
//   size: yup.string().required(),
//   crust: yup.string().required()
// });

const FormikForm = withFormik({
  mapPropsToValues: () => {
    return {
      size: "",
      crust: "",
      toppings0: "",
      toppings1: "",
      toppings2: "",
      toppings3: ""
    };
  },

  validationSchema: yup.object().shape({
    size: yup.string().required(),
    crust: yup.string().required()
  }),

  handleSubmit: (values, { props, state }) => {
    console.log("1", values);
    // console.log(state.details);
  }
})(Details);
export default FormikForm;
