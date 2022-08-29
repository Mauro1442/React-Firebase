import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Loading from "../Components/Loading";
import { useParams } from "react-router-dom";
import { getByIdProductos } from "../Service/productosServices";
import { Button } from "react-bootstrap";

const estiloDetalle = {
  img: {
    width: "100%",
    maxWidth: "400px",
    flex: 1,
  },
};
function Detalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const response = await getByIdProductos(id);
        setProducto(response.data());
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };
    request();
  }, [id]);

  const comprar = (id) => {
    console.log("id", id);
  };

  return (
    <Loading loading={loading}>
      <div>
        <h1>{producto?.name}</h1>
        <p>sku: {producto?.sku}</p>
        <img style={estiloDetalle} alt="" src={producto?.thumbnail}></img>
        {producto.description && <p>Description: {producto.description}</p>}
        <p>Price: {producto?.price}</p>
        <Button
          as={Link}
          to="/contact"
          variant="warning"
          onClick={() => comprar(id)}
        >
          Place Order
        </Button>
        <div>
          {false &&
            producto?.pictures.map((picture) => (
              <img src={picture.url} style={estiloDetalle.img} alt="..."></img>
            ))}
        </div>
      </div>
    </Loading>
  );
}

export default Detalle;
