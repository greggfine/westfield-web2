import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import city from "../images/city.jpg";
import earth from "../images/earth.jpg";
import ai from "../images/ai.png";
function Index() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={ai} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={earth} alt="Third slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={city} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <style jsx>{`
        img {
          height: 600px;
        }
      `}</style>
    </Container>
  );
}

export default Index;

/* 
NOTES: Link provides an onClick function around whatever it's wrapping
*/
