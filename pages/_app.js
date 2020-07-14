import React from "react";
import App from "next/app";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../style.scss";

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
        <Footer />
      </>
    );
  }
}

export default MyApp;
