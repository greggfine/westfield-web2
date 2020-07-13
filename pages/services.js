import Jumbo from "../components/Jumbo";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

import fetch from "isomorphic-unfetch";

function PlansAndPricing(props) {
  console.log(props);
  const { products } = props;
  //   const audio = `http://localhost:1337${products[0].url}`;
  return (
    <div>
      {/* <ul>
        {products.map((product) => {
          return <li>{product.title}</li>;
        })}
      </ul>
      <audio controls preload="true">
        <source src={audio} type="audio/mpeg"></source>
      </audio> */}
      <Jumbo headingText={"Services"} />
      <Container>
        <ListGroup>
          <ListGroup.Item>Ongoing Maintenance Time</ListGroup.Item>
          <ListGroup.Item>Pages Populated For You</ListGroup.Item>
          <ListGroup.Item>Professional Stock Images</ListGroup.Item>
          <ListGroup.Item>Plugins</ListGroup.Item>
          <ListGroup.Item>File Storage / Bandwidth</ListGroup.Item>
        </ListGroup>
      </Container>
      <style jsx>
        {`
        h1 {
          text-align: center;
        }
      `}
      </style>
    </div>
  );
}

// export async function getServerSideProps() {
//   const { API_URL } = process.env;

//   const res = await fetch(`${API_URL}/upload/files`);
//   const data = await res.json();

//   return {
//     props: {
//       products: data,
//     },
//   };
// }

export default PlansAndPricing;
