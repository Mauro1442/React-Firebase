import React, { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import { useParams } from "react-router-dom";
import { getByIdProductos } from "../Service/productosServices";
import { Button } from "react-bootstrap";

const estiloDetalle = {
  img: {
    width: "400px",
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
        {producto.description && <p>Description: {producto.description}</p>}
        <p>Price: {producto?.price}</p>
        <Button variant="warning" onClick={() => comprar(id)}>
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
