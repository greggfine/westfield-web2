import styles from "./Footer.module.scss";

export default () => (
  <footer className={styles.Footer}>
    <div className={styles.Footer__logoWrapper}>
      {/* <img className={styles.Footer__image} src="/the-fine-web.png" alt="" /> */}
      <img
        src="/the-code-creative_logo-dark_003.svg"
        alt=""
        width="200"
        height="100"
      />
    </div>

    <div className={styles.Footer__inner}>
      <p className={styles.Footer__copyright}>&copy;2021 The Code Creative</p>
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
