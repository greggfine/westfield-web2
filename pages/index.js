import React from "react";
import styles from "./index.module.scss";

function Index() {
  return (
    <main>
      <div className={styles.Hero}></div>
      <div className={styles.Hero__headerWrap}>
        <h1 className={styles.Hero__heading}>
          I DESIGN AND DEVELOP
          <br />
        </h1>
        <h2 className={styles.Hero__typewriter}>WEBSITES THAT GET RESULTS</h2>
      </div>
      <section className={styles.Hero__about}>
        <h1 className={styles.Hero__whatwedo}>
          Gregg Fine provides website design &amp; marketing strategies{" "}
          <span className={styles.Hero__highlightParent}>
            tailored to you<div className={styles.Hero__highlight}></div>
          </span>
        </h1>
        {/* <div className={styles.Hero__circleDecoration}></div>
        <div className={styles.Hero__circleDecoration2}></div> */}
        <p className={styles.Hero__text}>
          I provide reliable and personal website building, redesign and
          maintenance services to nonprofits and small businesses. My websites
          are based on WordPress, a powerful open-source content management
          system. Your website will be tailored to your organization’s needs and
          you will be getting rock-solid, one-on-one service. Whether you’re
          just starting out or already established, let us here at Anna Young
          Design help your business achieve its full potential. From bold and
          colorful logo and brand designs, to sleek, professional looking web
          pages, Anna Young Design is ready and able to provide everything you
          need to get potential customers paying attention to what you and your
          company have to offer.
        </p>
      </section>

      <section className={styles.cardGrid}>
        <div className={styles.serviceCard}>
          <img src="/web-icon-gravit.png" alt="" className={styles.cardIcon} />
          <h2 className={styles.serviceCardTitle}>
            Website Design & Development
          </h2>
          <p className={styles.secondaryCardContent}>
            We create truly customized websites, everything from beautiful,
            eye-catching and elegant designs to sleek, professional web pages
            that are sure to get you noticed.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <img src="/seo-icon-gravit.png" alt="" className={styles.cardIcon} />
          <h2 className={styles.serviceCardTitle}>SEO</h2>
          <p className={styles.secondaryCardContent}>
            Our innovative SEO strategies, as well as our wealth of knowledge
            regarding search algorithms will enable you to rise to the very top
            of the search rankings.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <img
            src="/email-icon-gravit.png"
            alt=""
            className={styles.cardIcon}
          />
          <h2 className={styles.serviceCardTitle}>Email Marketing</h2>
          <p className={styles.secondaryCardContent}>
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
