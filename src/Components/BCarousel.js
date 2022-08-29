import React from "react";
import Carousel from "react-bootstrap/Carousel";

const divStyle = {
  flexDirection: "row",
};
const imgStyle = {
  maxHeight: "680px",

  flex: 1,
};

export default function BCarousel() {
  return (
    <div style={divStyle}>
      <Carousel>
        <Carousel.Item>
          <img
            style={imgStyle}
            className="d-block w-100"
            src="https://c4.wallpaperflare.com/wallpaper/159/645/247/blur-the-camera-lens-camera-wallpaper-preview.jpg"
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
            src="https://c4.wallpaperflare.com/wallpaper/67/926/344/black-background-camera-technology-wallpaper-preview.jpg"
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
            src="https://wallpapercave.com/wp/wp7549565.jpg"
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
