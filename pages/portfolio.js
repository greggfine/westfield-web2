import Website from "../components/Website";
import Head from "next/head";
import styles from "./portfolio.module.scss";
import { Controller, Scene } from "react-scrollmagic";
import websites from "../websites.json";

function Portfolio(props) {
  return (
    <>
      <Head>
        <title>Portfolio | The Code Creative</title>
      </Head>
      <div className={styles.Portfolio}>
        <div className={styles.Portfolio__heading}></div>

        <div className={styles.Portfolio__websitesWrapper}>
          <h2 className={styles.Portfolio__wrapperHeading}>Websites</h2>
          <ul className={styles.Portfolio__websites}>
            {websites.sites.map((site) => (
              <Website website={site} />
            ))}
          </ul>
        </div>
        <Controller>
          <Scene
            duration={1500}
            reverse={true}
            triggerHook={0.7}
            classToggle={styles.Portfolio__horizontalRow__trans}
            offset={10}
          >
            <div className={styles.Portfolio__horizontalRow}></div>
          </Scene>
        </Controller>
        <div className={styles.Portfolio__websitesWrapper}>
          <h2 className={styles.Portfolio__wrapperHeading}>Web Apps</h2>
          <ul className={styles.Portfolio__websites}>
            {websites.apps.map((site) => (
              <Website website={site} />
            ))}
          </ul>
          ;
        </div>
      </div>
    </>
  );
}

export default Portfolio;
