import { Component, createRef } from "react";
import emailjs from "@emailjs/browser";
import contact_us from "../../images/contact_us.jpg";
import "./index.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.formRef = createRef();
    this.recaptchaRef = createRef();

    // Check cookie on load
    const sentCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("contactSent="));
    const sent = sentCookie ? sentCookie.split("=")[1] === "true" : false;

    this.state = { sending: false, sent };
  }

  setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const form = this.formRef.current;
    const email = form.email.value;

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    

    if (this.state.sending || this.state.sent) return;

    this.setState({ sending: true });

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      alert("✅ Email sent successfully! We’ll get back to you soon.");
      form.reset();
      this.recaptchaRef.current.reset();

      // Store in cookie for 7 days
      this.setCookie("contactSent", true, 7);
      this.setState({ sent: true });
    } catch (err) {
      alert("❌ Failed to send. Try again later.");
      console.error(err);
    } finally {
      this.setState({ sending: false });
    }
  };

  render() {
    const { sending, sent } = this.state;

    return (
      <div className="contact-container" id="contact">
        <h1>Contact Us</h1>
        <div className="inside-contact-container">
          <img className="contact-img" src={contact_us} alt="contact-us" />
          <form
            ref={this.formRef}
            className="form-container"
            onSubmit={this.handleSubmit}
          >
            <div className="first-last-name-container">
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Type your message..."
              required
            />
            <button
              type="submit"
              className="btn-submit button"
              disabled={sending}
              onClick={(e) => {
                if (sent) {
                  e.preventDefault();
                  alert(
                    "⚠️ You have already sent the message."
                  );
                }
              }}
            >
              {sent ? "Sent" : sending ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
