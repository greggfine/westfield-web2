import React from "react";
import Head from "next/head";
import cardGridStyles from "./cardGrid.module.scss";
import heroStyles from "./hero.module.scss";
import { Controller, Scene } from "react-scrollmagic";

function Index() {
  return (
    <>
      <Head>
        <title>Home | The Code Creative</title>
      </Head>
      <main className={heroStyles.main}>
        <div className={heroStyles.Hero}>
          {/* <img src="/man2.jpg" alt="" className={heroStyles.Hero__testImg} /> */}
          <img
            src="/the-code-creative_logo-light_003.svg"
            alt=""
            width="400"
            height="400"
            className={heroStyles.Hero__homeImg}
          />
        </div>

        <section className={heroStyles.Hero__about}>
          {/* <Controller>
            <Scene
              duration={1500}
              reverse={true}
              triggerHook={1}
              classToggle={heroStyles.Hero__whatwedoTrans}
              offset={600}
            >
              <h1 className={heroStyles.Hero__whatwedo}>
                Welcome to The Code Creative!
              </h1>
            </Scene>
          </Controller> */}
          {/* <Controller>
            <Scene
              duration={1500}
              reverse={true}
              triggerHook={1}
              offset={150}
              classToggle={heroStyles.Hero__textTrans}
            >
              <p className={heroStyles.Hero__text}></p>
            </Scene>
          </Controller> */}
        </section>
      </main>
    </>
  );
}

export default Index;
