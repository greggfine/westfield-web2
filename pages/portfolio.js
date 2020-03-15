import site1 from "../images/sites/site1.jpg";
import site2 from "../images/sites/site2.jpg";
import site3 from "../images/sites/site3.png";
import site4 from "../images/sites/site4.png";
import site5 from "../images/sites/site5.jpg";
import site6 from "../images/sites/site6.jpg";
import Site from "../components/Site";
import Jumbo from "../components/Jumbo";
import Container from "react-bootstrap/Container";

function Portfolio(props) {
  return (
    <>
      <Jumbo />
      <ul className="Portfolio-sites">
        {props.sites.map(site => (
          <Site site={site} />
        ))}
        <style jsx>{`
          .Portfolio-sites {
            list-style-type: none;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 60px auto;
            padding: 40px 0px;
            font-size: 1.5rem;
            width: 60%;
          }
        `}</style>
      </ul>
    </>
  );
}

Portfolio.defaultProps = {
  sites: [
    {
      name: "Beauty Site",
      img: site1,
      link: "http://localhost:8888/Beauty/",
      description:
        "Our restaurant serves the freshest seafood daily. Contact us for specials"
    },
    {
      name: "Cosmetics Site",
      img: site2,
      link: "http://localhost:8888/Beauty/",
      description:
        "Our restaurant serves the freshest seafood daily. Contact us for specials"
    },
    {
      name: "Restaurant Site",
      img: site3,
      link: "http://localhost:8888/Beauty/",
      description:
        "Our restaurant serves the freshest seafood daily. Contact us for specials"
    },
    {
      name: "Sports Site",
      img: site4,
      link: "http://localhost:8888/Beauty/",
      description:
        "Our restaurant serves the freshest seafood daily. Contact us for specials"
    },
    {
      name: "Music Site",
      img: site5,
      link: "http://localhost:8888/Beauty/",
      description:
        "Our restaurant serves the freshest seafood daily. Contact us for specials"
    },
    {
      name: "Legal Site",
      img: site6,
      link: "http://localhost:8888/Beauty/",
      description:
        "Our restaurant serves the freshest seafood daily. Contact us for specials"
    }
  ]
};

export default Portfolio;
