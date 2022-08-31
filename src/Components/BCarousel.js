import React from "react";
import Carousel from "react-bootstrap/Carousel";

const divStyle = {
  width: "100%",
};
const imgStyle = {
  maxHeight: "680px",
};

export default function BCarousel() {
  return (
    <div style={divStyle}>
      <Carousel>
        <Carousel.Item>
          <img
            style={imgStyle}
            className="d-block w-100"
            src={require("../slide 1.jpg")}
            text="first"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Discover</h3>
            <p>Get ready for the adventure.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={imgStyle}
            className="d-block w-100"
            src={require("../slide 2.jpg")}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Improve</h3>
            <p>Find the best gear.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={imgStyle}
            className="d-block w-100"
            src={require("../slide 3.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Compare</h3>
            <p>Choose the perfect solution.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
