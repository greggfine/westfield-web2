import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styles from "./Navigation.module.scss";

import Link from "next/link";

function Navigation() {
  return (
    <>
      <Navbar expand="lg" className={styles.nav}>
        <Container>
          <Navbar.Brand href="#home">
            <Link href="/">
              <a className={styles.logo}>Gregg Fine Web Dev</a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
          >
            <Nav className="mr-auto">
              <Link href="/portfolio">
                <a className={styles.logo}>Portfolio</a>
              </Link>
              {/* <Link href="/services">
                <a className={styles.logo}>Blog</a>
              </Link> */}

              <Link href="/contact">
                <a className={styles.logo}>Contact</a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
