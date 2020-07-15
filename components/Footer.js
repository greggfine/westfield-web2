import styles from "./Footer.module.scss";

export default () => (
  <footer className={styles.Footer}>
    <div className={styles.Footer__logoWrapper}>
      <h3 className={styles.Footer__header}>Gregg Fine Web Dev</h3>
      <div className={styles.Footer__box}></div>
    </div>
    {/* <span className={styles.Footer__circleDecoration}></span>
    <span className={styles.Footer__circleDecoration2}></span> */}

    <div className={styles.Footer__inner}>
      <p className={styles.Footer__copyright}>&copy;2020 Gregg Fine Web Dev</p>
      <div className={styles.Footer__social}>
        <a
          href="https://twitter.com/GreggFine"
          target="_blank"
          className={styles.Footer__socialLink}
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCmOpHGj4JRWCdXhllVTZCVw/videos"
          target="_blank"
          className={styles.Footer__socialLink}
        >
          <i className="fa fa-youtube"></i>
        </a>
        <a
          href="https://www.instagram.com/greggfinedev/"
          target="_blank"
          className={styles.Footer__socialLink}
        >
          <i className="fa fa-instagram"></i>
        </a>
      </div>
    </div>
  </footer>
);
