import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import { Form } from "react-bootstrap";
import firebase from "../Config/firebase";
import ButtonWithLoading from "../Components/buttonWithLoading";
function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    //envio a firebase
    console.log("Form", data);
    try {
      const responseUser = await firebase.auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log("responseUser", responseUser);

      if (responseUser.user.uid) {
        const document = await firebase.db.collection("usuarios").add({
          name: data.nombre,
          lastname: data.apellido,
          userId: responseUser.user.uid,
        });
        console.log("document", document);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Name"
          register={{ ...register("nombre", { required: true }) }}
        />
        {errors.nombre && <span>Mandatory Field</span>}
        <Input
          label="Last Name"
          register={{ ...register("apellido", { required: true }) }}
        />
        {errors.apellido && <span>Mandatory Field</span>}
        <Input
          label="Email"
          type="email"
          register={{ ...register("email", { required: true }) }}
        />
        {errors.email && <span>Mandatory Field</span>}
        <Input
          label="Password"
          type="password"
          register={{ ...register("password", { required: true }) }}
        />
        {errors.password && <span>Mandatory Field</span>}

        <ButtonWithLoading loading={loading}>Sign Me Up!</ButtonWithLoading>
      </Form>
    </>
  );
}

export default Registro;
