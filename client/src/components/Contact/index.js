import { Component, createRef } from "react";
import emailjs from "@emailjs/browser";
import contact_us from "../../images/contact_us.jpg";
import "./index.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.formRef = createRef(); // reference for the form
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const btn = e.target.querySelector("button");
    btn.textContent = "Sending...";

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,       // your service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,      // your template ID
        this.formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY      // your public key
      )
      .then(
        () => {
          btn.textContent = "Send";
          alert("✅ Email sent successfully!");
          this.formRef.current.reset(); // clear form after send
        },
        (err) => {
          btn.textContent = "Send";
          alert("❌ Failed: " + JSON.stringify(err));
        }
      );
  };

  render() {
    return (
      <div className="contact-container" id="contact">
        <h1>Contact Us</h1>

        <div className="inside-contact-container">
          <img className="contact-img" src={contact_us} alt="contact-us" />

          <form ref={this.formRef} className="form-container" onSubmit={this.handleSubmit}>
            <div className="first-last-name-container">
              <div className="name-container" style={{ width: "48%" }}>
                <input type="text" name="firstName" placeholder="Enter first name" required />
              </div>
              <div className="name-container" style={{ width: "48%" }}>
                <input type="text" name="lastName" placeholder="Enter last name" required />
              </div>
            </div>

            <input type="email" name="email" placeholder="Enter your email" required />
            <textarea name="message" rows="4" placeholder="Type your message..." required></textarea>

            <button type="submit" className="btn-submit button">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
