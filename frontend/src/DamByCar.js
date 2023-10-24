import React, { useState } from "react";
import Footer from './Footer';
import Header from './Header';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    damageType: "fire",
    damageDescription: "",
    carRegistrationNumber: "",
    registrationAddress: "",
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
      <Header />
      <div className="top-margin"></div>
      <div className="signup-container">
        <div className="signup-form">
          <h1 className="signup-heading">Dam_By_Car</h1>
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
            
            {/* Additional form fields */}
            <div className="form-group">
              <label htmlFor="damageType">Damage Type</label>
              <select
                className="form-control"
                id="damageType"
                name="damageType"
                value={formData.damageType}
                onChange={handleChange}
              >
                <option value="fire">Fire</option>
                <option value="earthquake">Earthquake</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="damageDescription">Damage Description</label>
              <input
                type="text"
                className="form-control"
                id="damageDescription"
                placeholder="Description"
                name="damageDescription"
                value={formData.damageDescription}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="carRegistrationNumber">Car Registration Number</label>
              <input
                type="text"
                className="form-control"
                id="carRegistrationNumber"
                placeholder="Registration Number"
                name="carRegistrationNumber"
                value={formData.carRegistrationNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="registrationAddress">Registration Address</label>
              <input
                type="text"
                className="form-control"
                id="registrationAddress"
                placeholder="Address"
                name="registrationAddress"
                value={formData.registrationAddress}
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
            <div className="text-center">
              <button
                className="signup-button"
                type="submit"
                disabled={
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
