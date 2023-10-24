// Signup.js
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    dob: "",
    policy_type: "New Money Back Plan - 20 Years",
    policy_term: "",
    beneficiary_name: "",
    relationship: "",
    critical_illness: false,
    accidental_death: false,
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
        alert("Signup successful!");
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
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  return (
    <>
      <Header />
      <div className="top-margin"></div>
      <div className="signup-container">
        <div className="signup-form">
          <h1 className="signup-heading">Insurance_Form</h1>
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
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="policy_type">Policy Type</label>
              <select
                className="form-control"
                id="policy_type"
                name="policy_type"
                value={formData.policy_type}
                onChange={handleChange}
              >
                <option value="New Money Back Plan - 20 Years">
                  New Money Back Plan - 20 Years
                </option>
                {/* Add more policy types here */}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="policy_term">Policy Term</label>
              <input
                type="text"
                className="form-control"
                id="policy_term"
                placeholder="Policy Term"
                name="policy_term"
                value={formData.policy_term}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="beneficiary_name">Beneficiary Name</label>
              <input
                type="text"
                className="form-control"
                id="beneficiary_name"
                placeholder="Beneficiary Name"
                name="beneficiary_name"
                value={formData.beneficiary_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="relationship">Relationship</label>
              <input
                type="text"
                className="form-control"
                id="relationship"
                placeholder="Relationship"
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="critical_illness"
                name="critical_illness"
                checked={formData.critical_illness}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="critical_illness">
                Critical Illness
              </label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="accidental_death"
                name="accidental_death"
                checked={formData.accidental_death}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="accidental_death">
                Accidental Death
              </label>
            </div>

            <div className="text-center">
              <button
                className="signup-button"
                type="submit"
                disabled={!formData.email}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bottom-margin"></div>
      <div style={{ margin: "40px 0" }}></div>

      <Footer />
    </>
  );
};

export default Signup;
