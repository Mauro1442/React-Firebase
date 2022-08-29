import React, { useState, useEffect } from "react";
import Producto from "./Producto/index";
import { getAllProductos } from "../Service/productosServices";
import { Row } from "react-bootstrap";
import Loading from "./Loading";
import BCarousel from "./BCarousel";

function Productos() {
  const [listadoProductos, setListadoProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buscar, setBuscar] = useState("");
  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const response = await getAllProductos(buscar);
        setListadoProductos(response);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };
    request();
  }, [buscar]);
  const handleBuscar = (event) => {
    const value = event.target.value;
    setBuscar(value);
  };
  return (
    <div>
      <BCarousel />
      <input
        label="Search"
        type="text"
        value={buscar}
        onChange={handleBuscar}
      ></input>
      <Loading loading={loading}>
        {loading && <div>Cargando ...</div>}
        <div>
          <Row>
            {listadoProductos.map((listadoProducto) => (
              <Producto
                key={listadoProducto.id}
                nombre={listadoProducto.data().name}
                thumbnail={listadoProducto.data().thumbnail}
                precio={listadoProducto.data().price}
                sku={listadoProducto.data().sku}
                id={listadoProducto.id}
              />
            ))}
          </Row>
        </div>
      </Loading>{" "}
    </div>
  );
}

export default Productos;
