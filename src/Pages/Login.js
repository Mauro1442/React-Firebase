import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import { Form } from "react-bootstrap";
import firebase from "../Config/firebase";
import ButtonWithLoading from "../Components/buttonWithLoading";
import AlertCustom from "../Components/Alert";
import { loginMessage } from "../Utils/errorMessage";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ variant: "", text: "" });
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    //envio a firebase
    setLoading(true);
    try {
      const responseUser = await firebase.auth.signInWithEmailAndPassword(
        data.email,
        data.password
      );
      if (responseUser.user.uid) {
        const userInfo = await firebase.db
          .collection("usuarios")
          .where("userId", "==", responseUser.user.uid)
          .get();
        if (userInfo) {
          const nombre = userInfo.docs[0]?.data().name;
          setAlert({
            variant: "success",
            text: "Bienvenido " + (nombre || ""),
          });
          context.loginUser(userInfo.docs[0]?.data());
          navigate("/");
        }
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);

      setAlert({ variant: "danger", text: loginMessage[e.code] });
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          type="email"
          register={{ ...register("email", { required: true }) }}
        />
        {errors.email && <span>Mandatory field</span>}
        <Input
          label="Password"
          type="password"
          register={{ ...register("password", { required: true }) }}
        />
        {errors.password && <span>Mandatory field</span>}

        <ButtonWithLoading loading={loading}>Log In</ButtonWithLoading>
        <AlertCustom variant={alert.variant} text={alert.text} />
      </Form>
    </>
  );
}

export default Login;
