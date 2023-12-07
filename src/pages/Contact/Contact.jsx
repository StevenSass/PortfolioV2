import "./Contact.scss";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
const publicId = process.env.REACT_APP_YOUR_PUBLIC_ID;

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    form.current.reset();
  };

  return (
    <motion.main
      className="contact"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <h2>Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="contact__form">
        <label className="contact__form__name">Nom / Prénom / Société</label>
        <input type="text" name="name" required />
        <label className="contact__form__email">Email</label>
        <input type="email" name="email" required />
        <label className="contact__form__message">Message</label>
        <textarea name="message" required />
        <input
          type="submit"
          value="Envoyer"
          className="contact__form__submit"
        />
      </form>
    </motion.main>
  );
}
