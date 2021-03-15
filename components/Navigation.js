// import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "./Navigation.module.scss";
import React from "react";
import Link from "next/link";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      isSideMenuOpen: false,
      hasScrolled: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        this.setState({
          hasScrolled: true,
        });
      }
      if (window.scrollY < 20) {
        this.setState({
          hasScrolled: false,
        });
      }
    });
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      isSideMenuOpen: !this.state.isSideMenuOpen,
    });
  };
  render() {
    return (
      <header
        className={this.state.hasScrolled ? "site-header" : "site-header-init"}
      >
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
            <Link href="/">
              <a className="site-header__listitem" onClick={this.handleClick}>
                Home
              </a>
            </Link>
            {/* <Link href="/portfolio">
              <a className="site-header__listitem" onClick={this.handleClick}>
                Portfolio
              </a>
            </Link>
            <Link href="/services">
              <a className="site-header__listitem" onClick={this.handleClick}>
                Services
              </a>
            </Link>
            <Link href="/courses">
              <a className="site-header__listitem" onClick={this.handleClick}>
                Courses
              </a>
            </Link>
            <Link href="/checkout">
              <a className="site-header__listitem" onClick={this.handleClick}>
                Checkout
              </a>
            </Link>
            <Link href="/about">
              <a className="site-header__listitem" onClick={this.handleClick}>
                About
              </a>
            </Link> */}
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
                  <div
                    className={
                      this.state.hasScrolled
                        ? "site-header__brand-name"
                        : "site-header__brand-name-init"
                    }
                  >
                    <div className="site-header__brand-wrapper__line"></div>
                    <div className="site-header__brand-name__the">The</div>
                    <div className="site-header__brand-name__fine-web">
                      Code Creative
                    </div>
                    {/* <img src="/the-fine-web.png" alt="" /> */}
                  </div>
                </Link>
              </div>
              <div className="site-header__list-item-wrapper">
                <li className="site-header__nav-list-item">
                  <Link href="/">
                    <a className="site-header__listitem">Home</a>
                  </Link>
                </li>
                {/* <li className="site-header__nav-list-item">
                  <Link href="/portfolio">
                    <a className="site-header__listitem">Portfolio</a>
                  </Link>
                </li>
                <li className="site-header__nav-list-item">
                  <Link href="/services">
                    <a className="site-header__listitem">Services</a>
                  </Link>
                </li>
                <li className="site-header__nav-list-item">
                  <Link href="/checkout">
                    <a className="site-header__listitem">Checkout</a>
                  </Link>
                </li>
                <li>
                  <Link href="/courses">
                    <a className="site-header__listitem">Courses</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="site-header__listitem">About</a>
                  </Link>
                </li>{" "} */}
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
