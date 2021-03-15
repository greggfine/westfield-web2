import React from "react";
import App from "next/app";
import Navigation from "../components/Navigation";
import Head from "next/head";
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
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}

export default MyApp;
