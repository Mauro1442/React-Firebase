import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "react-bootstrap";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v0izwfk",
        "template_yblyteo",
        form.current,
        "RQOXYPsXFhjL9JO9q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <p>
        Leave us a message with the product you wish to order and we will send
        you the link to continue with the purchase
      </p>
      <label>Name</label>
      <br></br>
      <input type="text" name="name" />
      <br></br>
      <label>Email</label>
      <br></br>
      <input type="email" name="email" />
      <br></br>
      <label>Message</label>
      <br></br>
      <textarea name="message" />
      <br></br>
      <Button variant="warning" type="submit" value="Send">
        Send
      </Button>
    </form>
  );
};
