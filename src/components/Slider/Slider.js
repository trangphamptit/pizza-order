import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Products from "../../views/Products/Products";

class Slider extends Component {
  render() {
    return (
      <Carousel autoPlay>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-320-320-5.jpg" />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-320-320-6.jpg" />
          <p className="legend">Legend 6</p>
        </div>
      </Carousel>
    );
  }
}

export default Slider;
