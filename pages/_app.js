import React from "react";
import App from "next/app";
import Navigation from "../components/Navigation";
import StickyFooter from "react-sticky-footer";
import "../style.css";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Navigation />
        <Component {...pageProps} />

        <StickyFooter
          bottomThreshold={50}
          normalStyles={{
            backgroundColor: "#999999",
            padding: "2rem",
          }}
          stickyStyles={{
            backgroundColor: "rgba(255,255,255,.8)",
            padding: "2rem",
          }}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            delectus facere molestiae rem quibusdam, architecto saepe dolor
            minima quisquam eaque inventore recusandae enim laudantium esse
            maxime earum voluptate! Voluptates iusto saepe distinctio quaerat
            dolorum quos, optio consequuntur provident veniam aut accusamus
            dolore, ipsa obcaecati harum labore voluptatem! Fugit illo aperiam,
            atque dolorem quisquam mollitia provident officiis omnis iusto!
            Asperiores dolorem nemo quaerat, consectetur sequi praesentium amet
            doloremque? Nesciunt totam sit aliquam cumque qui delectus vel
            perspiciatis id maxime, beatae optio voluptatem distinctio. Quod
            cupiditate, quae repudiandae, a eaque possimus veniam eos
            recusandae, vel nisi alias nemo tenetur. Deserunt, earum hic.
          </p>
        </StickyFooter>
      </>
    );
  }
}

export default MyApp;
