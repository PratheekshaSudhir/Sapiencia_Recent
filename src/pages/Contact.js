import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', '4c1d5972-3ab7-4984-88de-f9990f9b049d');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();
      if (result.success) {
        alert('Your message has been sent successfully!');
        
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred while submitting the form.');
    }

    setIsSubmitting(false);
  };

  return (
  <div className="contact">
      <Navbar />
      <AnimatedBackground />
    <div className="contact-page">
      <div className="contact-card">
        <div className="contact-info">
          <h1 className="contact-title">Get in touch</h1>
          <p className="contact-subtitle">
            Request a demo, ask about federal contracts, or inquire about our AI solutions.
          </p>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>      
    </div>
    <Footer/>
  </div>  
  );
}

export default Contact;
