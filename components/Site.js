import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Site = ({ site }) => (
  <Card
    style={{
      width: "22rem",
      //   width: "360px",
      textAlign: "center",
      boxShadow: "2px 2px 5px 5px #eee",
      margin: "20px"
    }}
    key={site.name}
  >
    <Card.Img variant="top" src={site.img} />
    <Card.Body>
      <h4 className="card-title">{site.name}</h4>
      <p className="card-text">{site.description}</p>
      <Button variant="outline-primary" href={site.link} target="_blank">
        VIEW WEBSITE
      </Button>
    </Card.Body>
    <style jsx>{`
      .card-button {
        font-size: 16px;
      }
      ,
      .card-text {
        font-size: 16px;
        color: #666;
      }
      ,
      .card-title {
        font-size: 20px;
      }
    `}</style>
  </Card>
);

export default Site;
