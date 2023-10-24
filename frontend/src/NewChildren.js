import React, { useState } from "react";
import Footer from './Footer';
import Header from './Header';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    dateOfBirth: "",
    purpose: "",
    sumAssured: "",
    premiumPaymentTerm: "",
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
          <h1 className="signup-heading">New_children</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="parentName">Parent's Name</label>
              <input
                type="text"
                className="form-control"
                id="parentName"
                placeholder="Parent's Name"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="childName">Child's Name</label>
              <input
                type="text"
                className="form-control"
                id="childName"
                placeholder="Child's Name"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="childAge">Child's Age</label>
              <input
                type="number"
                className="form-control"
                id="childAge"
                placeholder="Child's Age"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="premiumAmount">Premium Amount (INR)</label>
              <input
                type="number"
                className="form-control"
                id="premiumAmount"
                placeholder="Premium Amount (INR)"
                name="premiumAmount"
                value={formData.premiumAmount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="text"
                className="form-control"
                id="dateOfBirth"
                placeholder="Date of Birth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="purpose">Purpose</label>
              <input
                type="text"
                className="form-control"
                id="purpose"
                placeholder="Purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="sumAssured">Sum Assured</label>
              <input
                type="number"
                className="form-control"
                id="sumAssured"
                placeholder="Sum Assured"
                name="sumAssured"
                value={formData.sumAssured}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="premiumPaymentTerm">Premium Payment Term</label>
              <input
                type="number"
                className="form-control"
                id="premiumPaymentTerm"
                placeholder="Premium Payment Term"
                name="premiumPaymentTerm"
                value={formData.premiumPaymentTerm}
                onChange={handleChange}
                required
              />
            </div>
            <div className="text-center">
              <button
                className="signup-button"
                type="submit"
                disabled={
                  !formData.parentName ||
                  !formData.childName ||
                  !formData.childAge ||
                  !formData.dateOfBirth ||
                  !formData.purpose ||
                  !formData.sumAssured ||
                  !formData.premiumPaymentTerm
                }
              >
                Submit Application
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
