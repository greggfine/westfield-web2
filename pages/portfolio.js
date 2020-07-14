import Website from "../components/Website";
import Jumbo from "../components/Jumbo";
import styles from "./portfolio.module.scss";

function Portfolio(props) {
  return (
    <>
      <Jumbo headingText="We Make Websites Great" />
      <ul className={styles.portfolioSites}>
        {props.sites.map((site) => (
          <Website website={site} />
        ))}
      </ul>
    </>
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
};

export default Portfolio;
