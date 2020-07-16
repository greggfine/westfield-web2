import styles from "./Footer.module.scss";

export default () => (
  <footer className={styles.Footer}>
    <div className={styles.Footer__logoWrapper}>
      {/* <h3 className={styles.Footer__header}>The Fine Web</h3> */}
      <img src="/the-fine-web.png" alt="" style={{ width: "50%" }} />
    </div>

    {/* <div class="svg-wrapper"> */}
    {/* <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg"> */}
    {/* <rect class="shape" height="58" width="300" /> */}
    {/* <div class="text">Gregg Fine Web</div> */}
    {/* </svg> */}
    {/* </div> */}
    {/* <div className={styles.Footer__circleDecoration}></div>
    <div className={styles.Footer__circleDecoration2}></div> */}

    <div className={styles.Footer__inner}>
      <p className={styles.Footer__copyright}>&copy;2020 Gregg Fine Web</p>
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
