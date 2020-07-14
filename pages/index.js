import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import spotify from "../images/spotify.png";
import creativity from "../images/creativity.jpg";
import esports from "../images/esports.jpg";
import styles from "./index.module.scss";
import IconGrid from "../components/IconGrid";
function Index() {
  return (
    <>
      <div className={styles.Hero}>
        <h2 className={styles.Hero__heading}>
          Turn Your Website Into A Marketing Machine
        </h2>
        <h4 className={styles.Hero__subheading}>
          Full-Service, Search Engine Optimized, Custom Website Design. Just One
          Low Monthly Fee. Hosting & Maintenance Included.
        </h4>
        <Container>
          <Carousel style={{ paddingTop: "60px" }}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                className={styles.Hero__img}
                src={spotify}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                className={styles.Hero__img}
                src={creativity}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                className={styles.Hero__img}
                src={esports}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
      <p className={styles.Hero__text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit iusto quis
        labore, ad est voluptate asperiores aliquam. Dolores voluptatibus nisi
        explicabo recusandae, odit quisquam, nobis temporibus tempore facere
        quaerat, magni neque corporis amet voluptatem dolorem necessitatibus
      </p>
      <div className={styles.Hero__waveContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#03a9f4"
            fill-opacity="1"
            d="M0,32L80,48C160,64,320,96,480,90.7C640,85,800,43,960,53.3C1120,64,1280,128,1360,160L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
      <IconGrid />
    </>
  );
}

export default Index;

/* 
NOTES: Link provides an onClick function around whatever it's wrapping
*/
