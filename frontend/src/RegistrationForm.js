import React, { useState } from "react";
import Footer from './Footer';
import Header from './Header';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    policyTerm: "",
    gender: "",
    dateOfBirth: "",
    maritalStatus: "",
    occupation: "",
    annualIncome: "",
    address: "",
    healthCondition: "",
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
          <h1 className="signup-heading">Registration_Form</h1>
          <form onSubmit={handleSubmit}>
            
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Your Phone Number"
                name="phone"
                value={formData.phone}
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

            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                className="form-control"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="maritalStatus">Marital Status</label>
              <input
                type="text"
                className="form-control"
                id="maritalStatus"
                placeholder="Marital Status"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="occupation">Occupation</label>
              <input
                type="text"
                className="form-control"
                id="occupation"
                placeholder="Occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="annualIncome">Annual Income</label>
              <input
                type="text"
                className="form-control"
                id="annualIncome"
                placeholder="Annual Income"
                name="annualIncome"
                value={formData.annualIncome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="healthCondition">Health Condition</label>
              <input
                type="text"
                className="form-control"
                id="healthCondition"
                placeholder="Health Condition"
                name="healthCondition"
                value={formData.healthCondition}
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
                  !formData.phone ||
                  !formData.policyTerm ||
                  !formData.gender ||
                  !formData.dateOfBirth ||
                  !formData.maritalStatus ||
                  !formData.occupation ||
                  !formData.annualIncome ||
                  !formData.address ||
                  !formData.healthCondition
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
