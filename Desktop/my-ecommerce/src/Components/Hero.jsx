import React from "react";
import Card from "react-bootstrap/Card";

const Hero = () => {
  return (
    <Card className="text-white border-0">
      <Card.Img src="../images/bazar.jpg" alt="Card image" />
      <Card.ImgOverlay></Card.ImgOverlay>
    </Card>
  );
};

export default Hero;
