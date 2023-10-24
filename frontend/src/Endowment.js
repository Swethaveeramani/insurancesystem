import React, { useState } from "react";
import Footer from './Footer';
import Header from './Header';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    yearlyPremium: "",
    age: "",
    gender: "", // You can change this to radio buttons for 'Male' and 'Female'
    occupation: "",
    policyTerm: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/api/Endowment", {
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
          <h1 className="signup-heading">Endowment Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
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
              <label htmlFor="yearlyPremium">Yearly Premium</label>
              <input
                type="text"
                className="form-control"
                id="yearlyPremium"
                placeholder="Yearly Premium Amount"
                name="yearlyPremium"
                value={formData.yearlyPremium}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                className="form-control"
                id="age"
                placeholder="Your Age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select
                className="form-control"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="occupation">Occupation</label>
              <input
                type="text"
                className="form-control"
                id="occupation"
                placeholder="Your Occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="policyTerm">Policy Term</label>
              <input
                type="text"
                className="form-control"
                id="policyTerm"
                placeholder="Policy Term"
                name="policyTerm"
                value={formData.policyTerm}
                onChange={handleChange}
                required
              />
            </div>
            <div className="text-center">
              <button
                className="signup-button"
                type="submit"
                disabled={
                  !formData.name ||
                  !formData.email ||
                  !formData.yearlyPremium ||
                  !formData.age ||
                  !formData.gender ||
                  !formData.occupation ||
                  !formData.policyTerm
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
