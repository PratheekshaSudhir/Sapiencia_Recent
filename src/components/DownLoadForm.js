import React, { useState } from "react";
import "./DownLoadForm.css";
import { FaShieldAlt } from "react-icons/fa";

const DownloadForm = ({ whitepaperTitle, closeModal }) => {
  const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", organization: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send user details to backend
    const response = await fetch("http://localhost:5000/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, whitepaperTitle }),
    });

    if (response.ok) {
      alert("Download link sent to your email!");

      // Download the whitepaper file
      const fileUrl = `http://localhost:5000/download-whitepaper/${whitepaperTitle}`;
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", `${whitepaperTitle}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      closeModal();
    } else {
      alert("Error submitting form");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <FaShieldAlt className="modal-icon" />
        <h2 className="modal-title">Download {whitepaperTitle}</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
          <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} />
          <input type="text" name="organization" placeholder="Organization" onChange={handleChange} />
          <button type="submit">Download Whitepaper</button>
        </form>
      </div>
    </div>
  );
};

export default DownloadForm;
