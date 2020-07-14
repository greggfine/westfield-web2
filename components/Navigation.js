import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styles from "./Navigation.module.scss";

import Link from "next/link";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function Navigation() {
  return (
    <Navbar expand="lg" className={styles.Nav}>
      {/* <div> */}
      <Container>
        <Navbar.Brand href="#home" className={styles.Nav__brand}>
          <Link href="/">
            <a className={styles.Nav__logo}>Gregg Fine Web Dev</a>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bg-light"
        />
        {/* </div> */}

        {/* <div> */}
      </Container>
      <Navbar.Collapse id="basic-navbar-nav">
        <Container>
          <Nav className="mr-auto" className={styles.Nav__listitems}>
            <Link href="/portfolio">
              <a className={styles.Nav__listitem}>Portfolio</a>
            </Link>
            {/* <Link href="/services">
                <a className={styles.logo}>Blog</a>
              </Link> */}

            <Link href="/contact">
              <a className={styles.Nav__listitem}>Contact</a>
            </Link>
          </Nav>
        </Container>
      </Navbar.Collapse>
      {/* </div> */}
    </Navbar>
  );
}

export default Navigation;
