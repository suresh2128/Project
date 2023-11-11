// Contact.js
import React, { useState } from "react";
import axios from "axios";
import './contact.css';

const About = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Replace the URL with your server endpoint
    axios.post("http://example.com/api/contact", formData)
      .then((response) => {
        alert("Submitted Successfully");
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="contact-container">
      <div className="background-image">
        <div className="contact-form-container">
          <h1>Contact Us</h1>
          <p>Have questions or suggestions? We'd love to hear from you!</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
