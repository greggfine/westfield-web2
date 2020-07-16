import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styles from "./Navigation.module.scss";
import React from "react";

import Link from "next/link";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      isSideMenuOpen: false,
    };
  }
  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      isSideMenuOpen: !this.state.isSideMenuOpen,
    });
  };
  render() {
    return (
      <header className="site-header">
        <div
          className={
            this.state.isOpen
              ? "site-header__menu-icon"
              : "site-header__menu-icon site-header__menu-icon--close-x"
          }
          id="menu-icon"
          onClick={this.handleClick}
        >
          <div className="site-header__menu-icon__middle"></div>
        </div>

        <div
          id="side-menu"
          className={
            this.state.isSideMenuOpen ? "side-nav open-side-menu" : "side-nav"
          }
        >
          <ul className="side-nav-list-items">
            <Link href="/portfolio">
              <a className="site-header__listitem" onClick={this.handleClick}>
                Portfolio
              </a>
            </Link>
            <Link href="/contact">
              <a className="site-header__listitem" onClick={this.handleClick}>
                Contact
              </a>
            </Link>
          </ul>
        </div>
        <div className="content-sizer">
          <nav className="site-header__nav">
            <ul className="site-header__nav-list">
              <div className="site-header__brand-wrapper">
                <Link href="/">
                  <h1 className="site-header__brand-name">
                    {/* <strong>The Fine Web</strong> */}
                    <img src="/the-fine-web.png" alt="" />
                  </h1>
                </Link>
              </div>
              <div class="site-header__list-item-wrapper">
                <li className="site-header__nav-list-item">
                  <Link href="/portfolio">
                    <a className="site-header__listitem">Portfolio</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="site-header__listitem">Contact</a>
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navigation;
