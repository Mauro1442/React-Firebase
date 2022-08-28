import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AuthContext from "../../Context/AuthContext";

function Acciones(props) {
  console.log("Props", props);
  const { id } = props;
  return (
    <>
      <AuthContext.Consumer>
        {(context) => (
          <>
            <Button variant="dark" as={Link} to={"/producto/" + id}>
              See details
            </Button>
            <br></br>
            {context.userLogin && (
              <Button
                variant="danger"
                as={Link}
                to={"/productos/modificar/" + id}
              >
                Update
              </Button>
            )}
          </>
        )}
      </AuthContext.Consumer>
    </>
  );
}
export default Acciones;
