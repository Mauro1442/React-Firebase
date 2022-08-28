import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import { Button, Form } from "react-bootstrap";
import firebase from "../Config/firebase";
import AuthContext from "../Context/AuthContext";

function ProductosAlta() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("Form", data);
    try {
      const document = await firebase.firestore().collection("productos").add({
        name: data.name,
        price: data.price,
        sku: data.sku,
        description: data.description,
        thumbnail: data.thumbnail,
      });
      console.log("document", document);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <AuthContext.Consumer>
        {(context) => (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Name"
              register={{ ...register("name", { required: true }) }}
            />
            {errors.nombre && <span>Mandatory field</span>}
            <Input
              label="URL Thumbnail"
              register={{ ...register("thumbnail", { required: true }) }}
            />
            {errors.thumbnail && <span>Mandatory field</span>}
            <Input
              label="Price"
              type="number"
              register={{ ...register("price", { required: true }) }}
            />
            {errors.precio && <span>Mandatory field</span>}{" "}
            <Input
              label="sku"
              register={{ ...register("sku", { required: true }) }}
            />
            {errors.sku && <span>Mandatory field</span>}
            <Input
              label="Description"
              register={{ ...register("description", { required: true }) }}
            />
            {errors.descripcion && <span>Mandatory field</span>}
            {context.userLogin && (
              <>
                <Button variant="dark" type="submit">
                  Save
                </Button>
              </>
            )}
          </Form>
        )}
      </AuthContext.Consumer>
    </>
  );
}

export default ProductosAlta;
