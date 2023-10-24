import React, { useState } from "react";
import Footer from './Footer';
import Header from './Header';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    coverageType: "homeContents",
    addOn: false,
    domesticHelpCoverage: false,
    guestCoverage: false,
    comments: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("User registered successfully!");
        alert('Signup successful!');
        // You can redirect the user to a different page after successful signup
      } else {
        const data = await response.json();
        console.error(data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      <Header />
      <div className="top-margin"></div>
      <div className="signup-container">
        <div className="signup-form">
          <h1 className="signup-heading">Burglary Theft</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="John Doe"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="coverageType">Coverage Type</label>
              <select
                id="coverageType"
                name="coverageType"
                value={formData.coverageType}
                onChange={handleChange}
                required
              >
                <option value="homeContents">Home Contents</option>
                <option value="auto">Auto</option>
                <option value="life">Life</option>
                {/* Add other options as needed */}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="addOn">Add On</label>
              <input
                type="checkbox"
                id="addOn"
                name="addOn"
                checked={formData.addOn}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="domesticHelpCoverage">Domestic Help Coverage</label>
              <input
                type="checkbox"
                id="domesticHelpCoverage"
                name="domesticHelpCoverage"
                checked={formData.domesticHelpCoverage}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="guestCoverage">Guest Coverage</label>
              <input
                type="checkbox"
                id="guestCoverage"
                name="guestCoverage"
                checked={formData.guestCoverage}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="comments">Comments</label>
              <textarea
                className="form-control"
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
              ></textarea>
            </div>

            

            <div className="text-center">
              <button
                className="signup-button"
                type="submit"
                disabled={!formData.name || !formData.email}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bottom-margin"></div>
      <div style={{ margin: '40px 0' }}></div>

      <Footer />
    </>
  );
};

export default Signup;
