import React, { useRef, useState } from "react";
import "./ContactForm.css";
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const formRef=useRef();
  const [error, setError]=useState(false);
  const [success, setSuccess]=useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fzdjbn6', 'template_zkymqhw', formRef.current, {
        publicKey: 'R0krNouWWNQ8Rzcsz',
      })
      .then(
        () => {
          setSuccess(true);
          
        },
        (error) => {
          setError(true);
        },
      );
  };
  return (
    <div className="contact-form-content">
      <form ref={formRef} onSubmit={sendEmail}>
        
          <input type="text" name="name" placeholder="Name" />
        
        <input type="text" name="email" placeholder="Email" />
        <textarea type="text" name="message" placeholder="Message" rows={3} />

        <button>SEND</button>
        {error && "ERROR"}
        {success&&"SUCCESS"}
      </form>
    </div>
  );
};

export default ContactForm;
