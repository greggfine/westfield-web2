import Website from "../components/Website";
import Jumbo from "../components/Jumbo";
import styles from "./portfolio.module.scss";

function Portfolio(props) {
  return (
    <div className={styles.Portfolio}>
      <div className={styles.Portfolio__heading}>
        <div class={styles.Portfolio__headerWrapper}>
          <h1 className={styles.Portfolio__title}>
            PORTFOLIO
          </h1>
          <p className={styles.Portfolio__subheading}>
            Custom websites and web apps
          </p>
        </div>
      </div>

      <div className={styles.websitesWrapper}>
        <h2 className={styles.wrapperHeading}>Websites</h2>
        <ul className={styles.Portfolio__websites}>
          {props.sites.map((site) => (
            <Website website={site} />
          ))}
        </ul>
      </div>
      <div className={styles.websitesWrapper}>
        <h2 className={styles.wrapperHeading}>Web Apps</h2>
        <ul className={styles.Portfolio__websites}>
          {props.apps.map((site) => (
            <Website website={site} />
          ))}
        </ul>;
      </div>
    </div>
  );
}

Portfolio.defaultProps = {
  sites: [
    {
      name: "Beauty Site",
      img: "/website1.jpg",
      link: "http://localhost:8888/Beauty/",
      description:
        "Our restaurant serves the freshest seafood daily. Contact us for specials",
    },
    {
      name: "Cosmetics Site",
      img: "/website2.jpg",
      link: "http://localhost:8888/Beauty/",
      description:
        "Our restaurant serves the freshest seafood daily. Contact us for specials",
    },
    {
      name: "Restaurant Site",
      img: "/website3.png",
      link: "http://localhost:8888/Beauty/",
      description:
        "Our restaurant serves the freshest seafood daily. Contact us for specials",
    },
  ],
  apps: [
    {
      name: "Ear Trainer",
      img: "/website1.jpg",
      link: "http://localhost:8888/Beauty/",
      description:
        "Our restaurant serves the freshest seafood daily. Contact us for specials",
    },
    {
      name: "Cosmetics Site",
      img: "/website2.jpg",
      link: "http://localhost:8888/Beauty/",
      description:
        "Our restaurant serves the freshest seafood daily. Contact us for specials",
    },
    {
      name: "Restaurant Site",
      img: "/website3.png",
      link: "http://localhost:8888/Beauty/",
      description:
        "Our restaurant serves the freshest seafood daily. Contact us for specials",
    },
  ],
};

export default Portfolio;
