import React from "react";
import cardGridStyles from "./cardGrid.module.scss";
import heroStyles from "./hero.module.scss";
import { Controller, Scene } from "react-scrollmagic";

function Index() {
  return (
    <main>
      <div className={heroStyles.Hero}>
        {/* <div className={styles.Hero__headerWrap}>
          <h1 className={styles.Hero__heading}>
            I CREATE CUSTOM WEBSITES AND APPS
            <br />
          </h1>
          <h2 className={styles.Hero__typewriter}>THAT HELP BRANDS GROW</h2>
        </div>
        <div></div> */}
        <img src="/man.jpg" alt="" className={heroStyles.Hero__testImg} />
      </div>

      <section className={heroStyles.Hero__about}>
        <Controller>
          <Scene
            duration={1500}
            reverse={true}
            triggerHook={1}
            classToggle={heroStyles.Hero__whatwedoTrans}
            offset={600}
          >
            <h1 className={heroStyles.Hero__whatwedo}>
              Gregg Fine provides website development that helps your business
              be more successful
            </h1>
          </Scene>
        </Controller>
        <Controller>
          <Scene
            duration={1500}
            reverse={true}
            triggerHook={1}
            offset={150}
            classToggle={heroStyles.Hero__textTrans}
          >
            <p className={heroStyles.Hero__text}>
              While site builders like Squarespace and Wix are great for putting
              up a quick website, they’re often limited in what they can do. are
              often sufficient for in order to stand out and tailor your brand
              and looks polished that helps you attract customers and help your
              business grow and the things you need to be able to do
            </p>
          </Scene>
        </Controller>
      </section>

      <Controller>
        <Scene
          duration={1500}
          reverse={true}
          triggerHook={1}
          classToggle={cardGridStyles.CardGrid__cardGridTrans}
          offset={150}
        >
          <section className={cardGridStyles.CardGrid}>
            <div className={cardGridStyles.CardGrid__serviceCard}>
              <img
                src="/web-icon-gravit.png"
                alt=""
                className={cardGridStyles.CardGrid__cardIcon}
              />
              <h2 className={cardGridStyles.CardGrid__serviceCardTitle}>
                Website Development
              </h2>
              <p className={cardGridStyles.CardGrid__secondaryCardContent}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                veritatis beatae pariatur id eligendi. Quibusdam aperiam
                aspernatur culpa molestiae qui ut pariatur, quae praesentium
                illum!
              </p>
            </div>
            <div className={cardGridStyles.CardGrid__serviceCard}>
              <img
                src="/web-custom-web-apps-icon-gravit.png"
                alt=""
                className={cardGridStyles.CardGrid__cardIcon}
              />
              <h2 className={cardGridStyles.CardGrid__serviceCardTitle}>
                Custom Web Apps
              </h2>
              <p className={cardGridStyles.CardGrid__secondaryCardContent}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
                molestias nulla, ullam vel itaque voluptatibus minima maxime
                corporis laborum natus.
              </p>
            </div>
            <div className={cardGridStyles.CardGrid__serviceCard}>
              <img
                src="/email-icon-gravit.png"
                alt=""
                className={cardGridStyles.CardGrid__cardIcon}
              />
              <h2 className={cardGridStyles.CardGrid__serviceCardTitle}>
                Email Marketing
              </h2>
              <p className={cardGridStyles.CardGrid__secondaryCardContent}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                beatae cupiditate reprehenderit ea dicta repellendus ratione
                aspernatur mollitia natus assumenda.
              </p>
            </div>
            <div className={cardGridStyles.CardGrid__serviceCard}>
              <img
                src="/website-redesign-icon-gravit.png"
                alt=""
                className={cardGridStyles.CardGrid__cardIcon}
              />
              <h2 className={cardGridStyles.CardGrid__serviceCardTitle}>
                Website Redesign
              </h2>
              <p className={cardGridStyles.CardGrid__secondaryCardContent}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos aut accusantium neque eveniet dolorum illum debitis
                nesciunt pariatur officiis voluptatem?
              </p>
            </div>
            <div className={cardGridStyles.CardGrid__serviceCard}>
              <img
                src="/seo-icon-gravit.png"
                alt=""
                className={cardGridStyles.CardGrid__cardIcon}
              />
              <h2 className={cardGridStyles.CardGrid__serviceCardTitle}>SEO</h2>
              <p className={cardGridStyles.CardGrid__secondaryCardContent}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur repellat officia architecto sint recusandae et
                consequatur suscipit alias in? Debitis.
              </p>
            </div>
            <div className={cardGridStyles.CardGrid__serviceCard}>
              <img
                src="/web-maintenance-icon-gravit.png"
                alt=""
                className={cardGridStyles.CardGrid__cardIcon}
              />
              <h2 className={cardGridStyles.CardGrid__serviceCardTitle}>
                Website Maintenance & Content Updates
              </h2>
              <p className={cardGridStyles.CardGrid__secondaryCardContent}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
                cum necessitatibus! Ipsa iusto quam quisquam itaque delectus.
                Minus, ad numquam.
              </p>
            </div>
          </section>
        </Scene>
      </Controller>
    </main>
  );
}

export default Index;
