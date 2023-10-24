import React, { useState } from "react";
import Footer from './Footer';
import Header from './Header';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "male",
    occupation: "",
    policyAmount: "",
    maritalStatus: "",
    aadharNumber: "",
    panNumber: "",
    secondPolicyHolderName: "",
    address: "",
    familyMembers: "",
    premiumAmount: "1999",
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
        console.log("Application submitted successfully!");
        alert('Application submitted successfully!');
        // You can redirect the user to a different page after successful submission
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
          <h1 className="signup-heading">Life Insurance Application</h1>
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
              <label htmlFor="age">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="Age"
                name="age"
                value={formData.age}
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
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
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
              <label htmlFor="aadharNumber">Aadhar Number</label>
              <input
                type="text"
                className="form-control"
                id="aadharNumber"
                placeholder="Aadhar Number"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
                required
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
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="secondPolicyHolderName">Second Policy Holder Name</label>
              <input
                type="text"
                className="form-control"
                id="secondPolicyHolderName"
                placeholder="Second Policy Holder Name"
                name="secondPolicyHolderName"
                value={formData.secondPolicyHolderName}
                onChange={handleChange}
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="familyMembers">Number of Family Members</label>
              <input
                type="number"
                className="form-control"
                id="familyMembers"
                placeholder="Number of Family Members"
                name="familyMembers"
                value={formData.familyMembers}
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
                  !formData.age ||
                  !formData.occupation ||
                  !formData.policyAmount ||
                  !formData.maritalStatus ||
                  !formData.aadharNumber ||
                  !formData.panNumber ||
                  !formData.familyMembers
                }
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
