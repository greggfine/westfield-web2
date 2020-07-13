import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import Link from "next/link";

function Navigation() {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#0288d1" }}>
        <Container>
          <Navbar.Brand href="#home">
            <Link href="/">
              <a style={{ marginRight: "60px" }}>Gregg Fine Web Development</a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link href="/services">
                <a style={{ marginRight: "40px" }}>Services</a>
              </Link>

              <Link href="/portfolio">
                <a>Portfolio</a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <style jsx>
        {`
          a {
            text-decoration: none;
            font-size: 20px;
            color: #fff;
          }
          a:hover {
            transition: color 300ms;
            color: #0288d1;
            // background-color: #fff;
          }
        `}
      </style>
    </>
  );
}

export default Navigation;
