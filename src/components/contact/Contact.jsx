import React, { useRef,useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0381u8h",
        "template_6pbk9me",
        form.current,
        "rjDWnyNxRJAABVDGN"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message submitted successfully! We'll get back to you soon!");
        },
        (error) => {
          console.log(error.text);
          alert("Request not submitted! Please try again later.");
        }
      );
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>

      <form onSubmit={sendEmail} ref={form} data-aos="flip-down">
        <div className="input-box">
          <input type="text" placeholder="Your Name" name="userName" required />
          <input
            type="email"
            placeholder="Your Email"
            name="userEmail"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Subject"
            name="userSubject"
            required
          />
          <textarea
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            name="userMessage"
            required
          ></textarea>
        </div>
        <div className="btns">
          <button type="submit" className="btn">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
