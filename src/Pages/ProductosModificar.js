import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import { Button, Form } from "react-bootstrap";
import firebase from "../Config/firebase";
import { useParams } from "react-router-dom";
import { getByIdProductos, update } from "../Service/productosServices";

function ProductosModificar() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  useEffect(() => {
    const request = async () => {
      try {
        const response = await getByIdProductos(id);
        setValue("name", response.data().name);
        setValue("price", response.data().price);
        setValue("sku", response.data().sku);
        setValue("thumbnail", response.data().thumbnail);
        setValue("description", response.data().description);
      } catch (e) {}
    };
    request();
  }, [id, setValue]);
  const onSubmit = async (data) => {
    console.log("Form", data);
    try {
      const document = await update(id, data);

      console.log("document", document);
    } catch (e) {
      console.log(e);
    }
  };
  const handleDelete = async () => {
    const document = await firebase.db.doc("productos/" + id).delete();
  };
  return (
    <>
      <Button variant="danger" type="submit" onClick={handleDelete}>
        Delete
      </Button>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Name"
          register={{ ...register("name", { required: true }) }}
        />
        {errors.nombre && <span>Mandatory field</span>}
        <Input
          label="Price"
          type="number"
          register={{ ...register("price", { required: true }) }}
        />
        {errors.precio && <span>Mandatory field</span>}
        <Input
          label="sku"
          type="number"
          register={{ ...register("sku", { required: true }) }}
        />
        {errors.sku && <span>Mandatory field</span>}
        <Input
          label="Description"
          register={{ ...register("description", { required: true }) }}
        />
        {errors.descripcion && <span>Mandatory field</span>}
        <Input
          label="URL Thumbnail"
          register={{ ...register("thumbnail", { required: true }) }}
        />
        {errors.thumbnail && <span>Mandatory field</span>}

        <Button variant="dark" type="submit">
          Update
        </Button>
      </Form>
    </>
  );
}

export default ProductosModificar;
