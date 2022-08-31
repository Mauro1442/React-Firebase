import { Card, Col } from "react-bootstrap";
import Acciones from "./Acciones";
import "./index.css";
const styles = {
  img: {
    flex: 1,
    maxWidth: "200px",
    maxHeight: "200px",
    alignSelf: "center",
    justifySelf: "center",
    grow: 1,
  },
  div: {
    width: "150px",
    height: "150px",
    flex: 1,
    alignContent: "center",
    flexDirection: "row",
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
            <div className="cardbody">
              <div className="chdiv">
                <div style={styles.div}>
                  <Card.Img variant="top" src={thumbnail} style={styles.img} />
                </div>
              </div>
              <div className="chdiv">
                <Card.Text>${precio} </Card.Text>
                <Card.Text> sku: {sku} </Card.Text>
                <Acciones id={id} />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
export default Producto;
