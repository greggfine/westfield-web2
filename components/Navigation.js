import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styles from "./Navigation.module.scss";

import Link from "next/link";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function Navigation() {
  return (
    <header className="site-header">
      <div
        className="site-header__menu-icon"
        id="menu-icon"
        onClick={() => {
          const menuIcon = document.getElementById("menu-icon");
          const sideMenu = document.querySelector("#side-menu");
          menuIcon.classList.toggle("site-header__menu-icon--close-x");
          sideMenu.classList.toggle("open-side-menu");
        }}
      >
        <div className="site-header__menu-icon__middle"></div>
      </div>

      <div id="side-menu" className="side-nav">
        <ul className="side-nav-list-items">
          <Link href="/portfolio">
            <a className="site-header__listitem">Portfolio</a>
          </Link>
          <Link href="/contact">
            <a className="site-header__listitem">Contact</a>
          </Link>
        </ul>
      </div>
      <div className="content-sizer">
        <nav className="site-header__nav">
          <ul className="site-header__nav-list">
            <div className="site-header__brand-wrapper">
              <Link href="/">
                <h1 className="site-header__brand-name">Gregg Fine Web Dev</h1>
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

export default Navigation;
