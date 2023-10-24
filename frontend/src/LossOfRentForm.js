// Signup.js
import React, { useState } from "react";
import Footer from './Footer';
import Header from './Header';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    policyHolder: "",
    contactEmail: "",
    insuredEvent: "",
    rentLostAmount: "",
    alternativeAccommodationCost: "",
    password: "", // Include password field
    usertype: "", // Include usertype field
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
          <h1 className="signup-heading">Loss_Of_Rent</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="policyHolder">Policy Holder</label>
              <input
                type="text"
                className="form-control"
                id="policyHolder"
                placeholder="Policy Holder"
                name="policyHolder"
                value={formData.policyHolder}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactEmail">Contact Email</label>
              <input
                type="email"
                className="form-control"
                id="contactEmail"
                placeholder="name@example.com"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="insuredEvent">Insured Event</label>
              <input
                type="text"
                className="form-control"
                id="insuredEvent"
                placeholder="Insured Event"
                name="insuredEvent"
                value={formData.insuredEvent}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="rentLostAmount">Rent Lost Amount</label>
              <input
                type="text"
                className="form-control"
                id="rentLostAmount"
                placeholder="Rent Lost Amount"
                name="rentLostAmount"
                value={formData.rentLostAmount}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="alternativeAccommodationCost">
                Alternative Accommodation Cost
              </label>
              <input
                type="text"
                className="form-control"
                id="alternativeAccommodationCost"
                placeholder="Alternative Accommodation Cost"
                name="alternativeAccommodationCost"
                value={formData.alternativeAccommodationCost}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="usertype">User Type</label>
              <input
                type="text"
                className="form-control"
                id="usertype"
                placeholder="User Type"
                name="usertype"
                value={formData.usertype}
                onChange={handleChange}
                required
              />
            </div>

            <div className="text-center">
              <button
                className="signup-button"
                type="submit"
                disabled={
                  !formData.policyHolder ||
                  !formData.contactEmail ||
                  !formData.insuredEvent ||
                  !formData.rentLostAmount ||
                  !formData.alternativeAccommodationCost ||
                  !formData.password ||
                  !formData.usertype
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
