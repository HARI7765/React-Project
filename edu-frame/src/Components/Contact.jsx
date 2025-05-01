
import React, { useState } from "react";
import axios from "axios";
import "./css/Contact.css";
import Navbar from "./Nav";
import Footer from "./Footer";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/contact/", formData);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Submission failed:", error);
      setSuccess(false);
    }
  };

  return (
    <>
   
    <Navbar />
    <div>
      <h2>Contact Us</h2>
      {success === true && <p style={{ color: "green" }}>Message sent!</p>}
      {success === false && <p style={{ color: "red" }}>Failed to send message.</p>}
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} required />
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default Contact;
