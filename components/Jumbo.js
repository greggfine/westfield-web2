import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Jumbo = () => (
  <div className="Jumbo">
    <Container>
      <h1 className="jumbotron-heading">We make websites great</h1>
      <p className="jumbotron-text">
        We've designed websites for the community for the past decade
      </p>
      <p></p>
    </Container>
    <style jsx>{`
      .Jumbo {
        height: 450px;
        background-color: #eee;
        display: flex;
        align-items: center;
      }
      .jumbotron-heading {
        text-align: center;
      }
      .jumbotron-text {
        text-align: center;
      }
    `}</style>
  </div>
);

export default Jumbo;
