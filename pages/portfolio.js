import Website from "../components/Website";
import Jumbo from "../components/Jumbo";
import styles from "./portfolio.module.scss";

function Portfolio(props) {
  return (
    <div className={styles.Portfolio}>
      <div className={styles.Portfolio__heading}>
        {/* <div class={styles.Portfolio__headerWrapper}>
          <h1 className={styles.Portfolio__title}>PORTFOLIO</h1>
          <p className={styles.Portfolio__subheading}>
            Custom websites and web apps
          </p>
        </div> */}
      </div>

      <div className={styles.websitesWrapper}>
        <h2 className={styles.wrapperHeading}>Websites</h2>
        <ul className={styles.Portfolio__websites}>
          {props.sites.map((site) => (
            <Website website={site} />
          ))}
        </ul>
      </div>
      <div className={styles.Portfolio__horizontalRow}></div>
      <div className={styles.websitesWrapper}>
        <h2 className={styles.wrapperHeading}>Web Apps</h2>
        <ul className={styles.Portfolio__websites}>
          {props.apps.map((site) => (
            <Website website={site} />
          ))}
        </ul>
        ;
      </div>
    </div>
  );
}

Portfolio.defaultProps = {
  sites: [
    {
      name: "Gregg Fine Dev",
      img: "/website1.png",
      link: "https://greggfinedev.com/",
      description:
        "The web development site of JavaScript programmer Gregg Fine",
    },
    {
      name: "Hidden Tiger Music Inc.",
      img: "/website2.png",
      link: "http://hiddentigermusic.com/",
      description:
        "Our restaurant serves the freshest seafood daily. Contact us for specials",
    },
    {
      name: "Synth Explorer",
      img: "/website3.png",
      link: "https://greggfine.github.io/synth-explorer-2020/#!/home",
      description:
        "Our restaurant serves the freshest seafood daily. Contact us for specials",
    },
  ],
  apps: [
    {
      name: "Jazz Guitar Game",
      img: "/website4.png",
      link: "https://www.greggfineguitar.com",
      description: "Guess the name of the Jazz guitarist you are listening to.",
    },
    {
      name: "Rhythmic Ear Trainer",
      img: "/website5.png",
      link: "https://greggfine.github.io/subdivision-app/",
      description:
        "Our restaurant serves the freshest seafood daily. Contact us for specials",
    },
    {
      name: "Searchable Music Library",
      img: "/website6.png",
      link: "https://immense-atoll-44421.herokuapp.com/search",
      description:
        "Our restaurant serves the freshest seafood daily. Contact us for specials",
    },
  ],
};

export default Portfolio;
