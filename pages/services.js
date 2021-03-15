import cardGridStyles from "./cardGrid.module.scss";
import { Controller, Scene } from "react-scrollmagic";
import Head from "next/head";

function Services(props) {
  const { products } = props;
  return (
    <>
      <Head>
        <title>Services | The Code Creative</title>
      </Head>
      <main>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia veritatis beatae pariatur id eligendi. Quibusdam
                  aperiam aspernatur culpa molestiae qui ut pariatur, quae
                  praesentium illum!
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis molestias nulla, ullam vel itaque voluptatibus minima
                  maxime corporis laborum natus.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Neque beatae cupiditate reprehenderit ea dicta repellendus
                  ratione aspernatur mollitia natus assumenda.
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
                  Dignissimos aut accusantium neque eveniet dolorum illum
                  debitis nesciunt pariatur officiis voluptatem?
                </p>
              </div>
              <div className={cardGridStyles.CardGrid__serviceCard}>
                <img
                  src="/seo-icon-gravit.png"
                  alt=""
                  className={cardGridStyles.CardGrid__cardIcon}
                />
                <h2 className={cardGridStyles.CardGrid__serviceCardTitle}>
                  SEO
                </h2>
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
    </>
  );
}

export default Services;
