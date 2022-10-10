import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div id="home-contact">
      <h1 className="contact-title">CONTATO</h1>
      <div className="contact-container">
        <img className="bottom-image" src="./bottom-image.jpg" alt="" />
        <p>Para agendar uma consulta</p>
        <button className="button">AGENDAR</button>
        <div className="contact-social-container">
          <a className="contact-social-link" href="" target="_blank">
            <img className="contact-social-image" src="./email.png" />
          </a>
          <a className="contact-social-link" href="" target="_blank">
            <img className="contact-social-image" src="./instagram.png" />
          </a>
          <a className="contact-social-link" href="" target="_blank">
            <img className="contact-social-image" src="./whatsapp.png" />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
