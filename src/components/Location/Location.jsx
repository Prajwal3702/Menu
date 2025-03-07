import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <div id="location" className="location-section">
      <div className="location-container">
        <h1 className="location-title">Find Us Here</h1>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.699838319761!2d72.84128787497502!3d18.98885918219792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce563c1bffff%3A0x56bbd7b49481237b!2sKrusty%20Cone!5e0!3m2!1sen!2sin!4v1741378190155!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Store Location"
          ></iframe>
        </div>
        <div className="location-details">
          <h2>Visit Our Store</h2>
          <p>Shop No. 3, Avighna lx, Building No. 4,</p>
          <p>Dr B.A.Road, Lalbaug,</p>
          <p>Mumbai- 400012</p>
          <div className="store-hours">
            <h3>Store Hours</h3>
            <p>Monday - Sunday: 11:00 AM - 11:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
