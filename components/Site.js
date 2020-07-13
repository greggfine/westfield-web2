import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Site = ({ site }) => (
  <>
    <div className="mycard">
      <Card
        style={{
          width: "22rem",
          textAlign: "center",
          boxShadow: "2px 2px 5px 5px #eee",
          margin: "20px",
          borderRadius: ".55em"
        }}
        key={site.name}
      >
        <div className="inner-card">
          <Card.Img variant="top" src={site.img} />
          <Card.Body>
            <h4 className="card-title">{site.name}</h4>
            <p className="card-text">{site.description}</p>
            <Button variant="outline-primary" href={site.link} target="_blank">
              VIEW WEBSITE
            </Button>
          </Card.Body>
        </div>
      </Card>
    </div>
    <style jsx>{`
      .mycard:hover {
        transition: transform 400ms ease-in-out;
        transform: translateY(-7px);
      }

      .inner-card:hover {
        box-shadow: 2px 2px 10px 10px #eee;
      }

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
  </>
);

export default Site;
