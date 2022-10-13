import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything</h3>
          <p className="contac__detalls">Don't like froms? Send me an email.</p>
        </div>
        <form action="" className="contact__form">
          <div className="contact-form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your subject"
              />
            </div>

            <div className="contact__form-div">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="contact__form-input contact__area"
                placeholder="Insert message"
              ></textarea>
            </div>
          </div>
          <button className="button">Send Messahe</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
