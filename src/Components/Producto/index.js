import { Card, Col } from "react-bootstrap";
import Acciones from "./Acciones";
const styles = {
  card: {
    width: "18rem",
    minHeight: "300px",
    marginBottom: "20px",
  },
  img: {
    width: "150px",
  },
};

function Producto(props) {
  console.log("Props", props);

  const { nombre, precio, sku, thumbnail, id } = props;
  return (
    <>
      <Col>
        <Card style={styles.card}>
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Img variant="top" src={thumbnail} style={styles.img} />

            <Card.Text>${precio} </Card.Text>
            <Card.Text> sku: {sku} </Card.Text>
            <Acciones id={id} />
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
export default Producto;
