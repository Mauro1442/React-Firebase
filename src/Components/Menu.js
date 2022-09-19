import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import AuthContext from "../Context/AuthContext";

function Menu(props) {
  const { login } = props;
  return (
    <>
      <AuthContext.Consumer>
        {(context) => (
          <Navbar
            bg="warning"
            variant="light"
            expand="lg"
            paddingLeft="0.25rem"
          >
            <Navbar.Brand as={Link} to="/">
              <img
                alt=""
                src="../logo512.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              Digital Shop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                {!context.userLogin && (
                  <>
                    <Nav.Link as={Link} to="/alta">
                      Sign Up
                    </Nav.Link>
                    <Nav.Link as={Link} to="/ingresar">
                      Login
                    </Nav.Link>
                  </>
                )}

                {context.userLogin && (
                  <>
                    <NavDropdown title="Products" id="basic-nav-dropdown">
                      <NavDropdown.Item as={Link} to="/productos/alta">
                        New Product
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={context.logOutUser}>Log Out</Nav.Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
            {context.userLogin && (
              <div>
                <h5>Hi {context?.userInfo?.name}! </h5>
              </div>
            )}
          </Navbar>
        )}
      </AuthContext.Consumer>
    </>
  );
}
export default Menu;
