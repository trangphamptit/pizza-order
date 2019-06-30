import React, { Component } from "react";
import "./Details.scss";
import product1 from "../../image/product1.png";
import Axios from "axios";
import { Form, withFormik, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { AppContext } from "../../services/AppContext";
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      details: {}
    };
  }
  async componentDidMount() {
    try {
      const { data } = await Axios.get(
        `http://pizza-products.herokuapp.com/pizzas/${this.state.id}`
      );
      this.setState({ details: data });
      // console.log(this.state.details);
    } catch (err) {
      console.log(err);
    }
  }

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
                    return (
                      <div className="size" key={index}>
                        {" "}
                        <input
                          type="radio"
                          name="size"
                          onChange={this.props.handleChange}
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
                    <label for="thin">thin</label>
                  </div>
                  <div className="crust">
                    <input
                      type="radio"
                      name="crust"
                      value="normal"
                      id="normal"
                      onChange={this.props.handleChange}
                    />{" "}
                    <label for="normal">normal</label>
                  </div>
                  <div className="crust">
                    <input
                      type="radio"
                      name="crust"
                      value="thick"
                      id="thick"
                      onChange={this.props.handleChange}
                    />{" "}
                    <label for="thick">thick</label>
                  </div>
                </div>
                <div className="error">{this.props.errors.crust}</div>
                {/* add topping */}
                <h4>add topping</h4>
                <div className="addtopping">
                  <div className="topping">
                    <input
                      type="radio"
                      name="addtopping"
                      value="cheese"
                      id="cheese"
                      onChange={this.props.handleChange}
                    />{" "}
                    <label for="cheese">cheese</label>
                  </div>

                  <div className="topping">
                    <input
                      type="radio"
                      name="addtopping"
                      value="doublecheese"
                      id="doublecheese"
                      onChange={this.props.handleChange}
                    />{" "}
                    <label for="doublecheese">double cheese</label>
                  </div>
                </div>
              </Form>

              <AppContext.Consumer>
                {value => (
                  <button
                    className="addtocart"
                    onClick={this.props.handleSubmit}
                  >
                    add to cart
                  </button>
                )}
              </AppContext.Consumer>
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
  mapPropsToValues() {
    return {
      size: "",
      price: "",
      crust: "",
      addtopping: ""
    };
  },
  validationSchema: yup.object().shape({
    size: yup.string().required(),
    crust: yup.string().required()
  }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log("1", values);
    setTimeout(() => setSubmitting(false), 3 * 1000);
  }
  // validationSchema: DetailsValidation
})(Details);
export default FormikForm;
