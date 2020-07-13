import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import spotify from "../images/spotify.png";
import creativity from "../images/creativity.jpg";
import esports from "../images/esports.jpg";
import texture from "../images/goodtextures/high-quality-synthetic-wall-textures-16250.jpg";

// import texture from "../images/goodtextures/high-quality-panoramic-concrete-textures-16401.jpg";
// import texture from "../images/goodtextures/marble-tiles-texture-121.jpg";
// import texture from "../images/goodtextures/various-synthetic--material-textures-17649.jpg";

import IconGrid from "../components/IconGrid";
function Index() {
  return (
    <>
      {/* <div className="Hero" style={{ backgroundImage: `url(${texture})` }}> */}
      <div className="Hero">
        <h2 className="Hero-heading">
          Turn Your Website Into A Marketing Machine
        </h2>
        <h4 className="Hero-subheading">
          Full-Service, Search Engine Optimized, Custom Website Design. Just One
          Low Monthly Fee. Hosting & Maintenance Included.
        </h4>
        <Container>
          <Carousel style={{ paddingTop: "60px" }}>
            <Carousel.Item>
              <img className="d-block w-100" src={spotify} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={creativity}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={esports} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
      {/* <p className="para-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit iusto quis
        labore, ad est voluptate asperiores aliquam. Dolores voluptatibus nisi
        explicabo recusandae, odit quisquam, nobis temporibus tempore facere
        quaerat, magni neque corporis amet voluptatem dolorem necessitatibus
      </p> */}
      <div
        className="wave-container"
        // style={{ backgroundImage: `url(${texture})` }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            //   fill="#673ab7"
            fill="#03a9f4"
            fill-opacity="1"
            d="M0,32L80,48C160,64,320,96,480,90.7C640,85,800,43,960,53.3C1120,64,1280,128,1360,160L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
      <IconGrid />

      <style jsx>{`
        .Hero {
          background-color: #03a9f4;
          height: 920px;
          margin: 0;
          color: #fff;
          //   background-blend-mode: color-burn;
          //   background-repeat: no-repeat;
          //   background-size: 130%;
        }
        .Hero-heading {
          max-width: 600px;
          text-align: center;
          margin: 0 auto 30px;
          padding-top: 60px;
          font-size: 3rem;
          font-weight: 800;
        }
        .Hero-subheading {
          max-width: 750px;
          margin: 0 auto;
          text-align: center;
          line-height: 1.4;
          font-weight: 400;
        }
        img {
          height: 600px;
        }
        .para-text {
          padding-top: 280px;
        }
        .wave-container {
          background-blend-mode: color-burn;
          background-repeat: no-repeat;
          background-size: 130%;
          position: relative;
          background: #09f;
          color: #fff;
          text-align: center;
          overflow: hidden;
        }
        .wave-container > svg {
          display: block;
        }
      `}</style>
    </>
  );
}

export default Index;

/* 
NOTES: Link provides an onClick function around whatever it's wrapping
*/
