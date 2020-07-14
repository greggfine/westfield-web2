import styles from "./Footer.module.scss";

export default () => (
  <footer className={styles.Footer}>
    <div className={styles.Footer__wrapper}>
      <h3 className={styles.Footer__header}>Gregg Fine Web Dev</h3>
      <div className={styles.Footer__box}></div>
    </div>
    <div className={styles.Footer__inner}>
      <p className={styles.Footer__copyright}>&copy;2020 Gregg Fine Web Dev</p>
      <div className={styles.Footer__social}>
        <i className="fa fa-facebook"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-youtube"></i>
        <i className="fa fa-instagram"></i>
      </div>
    </div>
  </footer>
);
