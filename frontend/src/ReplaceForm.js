import React, { useState } from "react";
import Footer from './Footer';
import Header from './Header';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    lockoutCost: "",
    breakInCost: "",
    locksmithContact: "",
    homeSecurityProvider: "",
    additionalInfo: "",
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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
    <Header/>
      <div className="top-margin"></div>
      <div className="signup-container">
        <div className="signup-form">
          <h1 className="signup-heading">Key_Replace</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Full Name"
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
              <label htmlFor="lockoutCost">Lockout Cost</label>
              <input
                type="text"
                className="form-control"
                id="lockoutCost"
                placeholder="Lockout Cost"
                name="lockoutCost"
                value={formData.lockoutCost}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="breakInCost">Break-In Cost</label>
              <input
                type="text"
                className="form-control"
                id="breakInCost"
                placeholder="Break-In Cost"
                name="breakInCost"
                value={formData.breakInCost}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="locksmithContact">Locksmith Contact</label>
              <input
                type="text"
                className="form-control"
                id="locksmithContact"
                placeholder="Locksmith Contact"
                name="locksmithContact"
                value={formData.locksmithContact}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="homeSecurityProvider">Home Security Provider</label>
              <input
                type="text"
                className="form-control"
                id="homeSecurityProvider"
                placeholder="Home Security Provider"
                name="homeSecurityProvider"
                value={formData.homeSecurityProvider}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="additionalInfo">Additional Information</label>
              <textarea
                className="form-control"
                id="additionalInfo"
                placeholder="Additional Information"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                className="signup-button"
                type="submit"
                disabled={
                  !formData.name ||
                  !formData.email
                }
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
