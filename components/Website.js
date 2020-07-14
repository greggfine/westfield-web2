import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "./Website.module.scss";

const Site = ({ website }) => (
  <>
    <div className={styles.mycard}>
      <Card className={styles.Card} key={website.name}>
        <div className={styles.innerCard}>
          <Card.Img
            variant="top"
            src={website.img}
            className={styles.cardImg}
          />
          <Card.Body>
            <h4 className={styles.cardTitle}>{website.name}</h4>
            <p className={styles.cardText}>{website.description}</p>
            <Button
              variant="outline-primary"
              href={website.link}
              target="_blank"
              className={styles.cardBtn}
            >
              VIEW WEBSITE
            </Button>
          </Card.Body>
        </div>
      </Card>
    </div>
  </>
);

export default Site;
