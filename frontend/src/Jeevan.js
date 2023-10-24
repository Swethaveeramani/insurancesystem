import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    proposer: "",
    childName: "",
    childAge: "",
    survivalBenefitProportion: "",
    proposerAge: "",
    proposerEmail: "",
    proposerPhone: "",
    nomineeName: "",
    nomineeRelation: "",
    premiumPaymentFrequency: "",
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
          <h1 className="signup-heading">Jeeven_Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="proposer">Proposer</label>
              <input
                type="text"
                className="form-control"
                id="proposer"
                placeholder="Proposer"
                name="proposer"
                value={formData.proposer}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="childName">Child Name</label>
              <input
                type="text"
                className="form-control"
                id="childName"
                placeholder="Child Name"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="childAge">Child's Age:</label>
              <input
                type="number"
                id="childAge"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="survivalBenefitProportion">
                Survival Benefit Proportion:
              </label>
              <input
                type="text"
                id="survivalBenefitProportion"
                name="survivalBenefitProportion"
                value={formData.survivalBenefitProportion}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="proposerAge">Proposer Age:</label>
              <input
                type="number"
                id="proposerAge"
                name="proposerAge"
                value={formData.proposerAge}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="proposerEmail">Proposer Email:</label>
              <input
                type="email"
                id="proposerEmail"
                name="proposerEmail"
                value={formData.proposerEmail}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="proposerPhone">Proposer Phone:</label>
              <input
                type="tel"
                id="proposerPhone"
                name="proposerPhone"
                value={formData.proposerPhone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="nomineeName">Nominee Name:</label>
              <input
                type="text"
                id="nomineeName"
                name="nomineeName"
                value={formData.nomineeName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="nomineeRelation">Nominee Relation:</label>
              <input
                type="text"
                id="nomineeRelation"
                name="nomineeRelation"
                value={formData.nomineeRelation}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="premiumPaymentFrequency">
                Premium Payment Frequency:
              </label>
              <select
                id="premiumPaymentFrequency"
                name="premiumPaymentFrequency"
                value={formData.premiumPaymentFrequency}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="annual">Annual</option>
                <option value="semi-annual">Semi-Annual</option>
                <option value="quarterly">Quarterly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            <div className="text-center">
              <button
                className="signup-button"
                type="submit"
                disabled={!formData.proposer}
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
