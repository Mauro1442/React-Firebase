import Home from "../Pages/Home";
import Registro from "../Pages/Registro";
import Login from "../Pages/Login";
import Detalle from "../Pages/Detalle";
import { ContactUs } from "../Components/ContactForm";
import NotFound from "../Pages/NotFound";
import ProductosAlta from "../Pages/ProductosAlta";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductosModificar from "../Pages/ProductosModificar";
import AuthContext from "../Context/AuthContext";

function Public() {
  return (
    <AuthContext.Consumer>
      {(context) => (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/contact" element={<ContactUs />} />
            {!context.userLogin && (
              <>
                <Route path="/alta" element={<Registro />} />
                <Route path="/ingresar" element={<Login />} />
              </>
            )}
            <Route path="/productos/alta" element={<ProductosAlta />} />
            {context.userLogin && (
              <Route
                path="/productos/modificar/:id"
                element={<ProductosModificar />}
              />
            )}
            <Route path="/producto/:id" element={<Detalle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </AuthContext.Consumer>
  );
}
export default Public;
