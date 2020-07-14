import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import spotify from "../images/spotify.png";
import creativity from "../images/creativity.jpg";
import esports from "../images/esports.jpg";
import styles from "./index.module.scss";
function Index() {
  return (
    <main>
      <div className={styles.Hero}>
        {/* <h4 className={styles.Hero__subheading}>
          Full-Service, Search Engine Optimized, Custom Website Design. Just One
          Low Monthly Fee. Hosting & Maintenance Included.
        </h4> */}
      </div>
      <h1 className={styles.Hero__heading}>
        WE DESIGN AND DEVELOP
        <br />
      </h1>
      <h2 className={styles.typewriter}>WEBSITES THAT GET RESULTS</h2>

      <section className={styles.Hero__about}>
        <h1 className={styles.Hero__whatwedo}>
          Gregg Fine provides website design & marketing strategies tailored to
          you
        </h1>
        <p className={styles.Hero__text}>
          I provide reliable and personal website building, redesign and
          maintenance services to nonprofits and small businesses. My websites
          are based on WordPress, a powerful open-source content management
          system. Your website will be tailored to your organization’s needs and
          you will be getting rock-solid, one-on-one service.
        </p>
      </section>

      <section className={styles.cardGrid}>
        <div className={styles.serviceCard}>
          <img src="/mobile-icon.png" alt="" className={styles.cardIcon} />
          <h2>Website Design & Development</h2>
          <p>
            We create truly customized websites, everything from beautiful,
            eye-catching and elegant designs to sleek, professional web pages
            that are sure to get you noticed.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <img src="/mobile-icon.png" alt="" className={styles.cardIcon} />
          <h2>SEO</h2>
          <p>
            Our innovative SEO strategies, as well as our wealth of knowledge
            regarding search algorithms will enable you to rise to the very top
            of the search rankings.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <img src="/mobile-icon.png" alt="" className={styles.cardIcon} />
          <h2>Email Marketing</h2>
          <p>
            We can help you reach out in the best possible way through our email
            marketing expertise. Retaining valuable customers and keeping
            clients abreast of your company’s latest goings-on.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Index;

/* 
NOTES: Link provides an onClick function around whatever it's wrapping
*/
