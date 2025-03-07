import {
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import overlay from "../../assets/overlay.jpg";
import "./Contact.css";
import React from "react";
import { SiZomato, SiSwiggy } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  }

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Contact</h1>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-details">
            <div className="contact-detail">
              <FaMapMarkerAlt className="contact-icon" />
              <p>
                Shop No. 3, Avighna lx, Building No. 4, Dr B.A.Road, Lalbaug,
                Mumbai- 400012
              </p>
            </div>
            <div className="contact-detail">
              <MdEmail className="contact-icon" />
              <p>info@krustycone.com</p>
            </div>
            <div className="contact-detail">
              <FaPhone className="contact-icon" />
              <p>+91 7400143648</p>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaFacebookSquare />
            </a>
            <a href="#" className="social-icon ">
              <SiZomato />
            </a>
            <a href="#" className="social-icon ">
              <SiSwiggy />
            </a>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-input"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                className="form-input"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
