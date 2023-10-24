import React, { useState } from "react";
import Footer from './Footer';
import Header from './Header';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    propertyValue: "",
    coverageType: "fire",
    premium: "1999",
    panNumber: "",
    aadharNumber: "",
    phoneNumber: "",
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
        alert('Submit successful!');
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
      <Header />
      <div className="top-margin"></div>
      <div className="signup-container">
        <div className="signup-form">
          <h1 className="signup-heading">Fire_Insurance</h1>
          <form onSubmit={handleSubmit}>
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
              <label htmlFor="propertyValue">Property Value</label>
              <input
                type="text"
                className="form-control"
                id="propertyValue"
                placeholder="Property Value"
                name="propertyValue"
                value={formData.propertyValue}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="coverageType">Coverage Type</label>
              <select
                className="form-control"
                id="coverageType"
                name="coverageType"
                value={formData.coverageType}
                onChange={handleChange}
              >
                <option value="fire">Fire</option>
                {/* Add more coverage options here */}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="premium">Premium</label>
              <input
                type="text"
                className="form-control"
                id="premium"
                placeholder="Premium"
                name="premium"
                value={formData.premium}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="panNumber">PAN Number</label>
              <input
                type="text"
                className="form-control"
                id="panNumber"
                placeholder="PAN Number"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="aadharNumber">Aadhar Number</label>
              <input
                type="text"
                className="form-control"
                id="aadharNumber"
                placeholder="Aadhar Number"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            {/* Add more fields as needed */}
            

            <div className="text-center">
              <button
                className="signup-button"
                type="submit"
                disabled={!formData.email}
              >
                Payment
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
