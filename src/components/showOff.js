import React from "react";
import { Carousel } from "react-bootstrap";
import w1 from "../assets/images/w1.jpg";
import sale from "../assets/images/sale.jpg";
const ShowOff = (props) => {
  return (
    <Carousel variant="dark" indicator={false} controls={false} fade={true}>
      <Carousel.Item>
        <img className="d-block w-100" src={sale} alt="belajar programming promo" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={w1} alt="dea afrizal" />
        <Carousel.Caption>{props.tagline}</Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default ShowOff;
