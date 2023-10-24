import React, { useState } from "react";
import Footer from './Footer';
import Header from './Header';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    description: "",
    estimatedRepairCost: "",
    repairShop: "",
    contactInfo: "",
    photos: [],
    insuranceClaim: false,
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
          <h1 className="signup-heading">Damage of Car</h1>
          <form onSubmit={handleSubmit}>
            
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                placeholder="Accident description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="estimatedRepairCost">Estimated Repair Cost</label>
              <input
                type="text"
                className="form-control"
                id="estimatedRepairCost"
                placeholder="Estimated Repair Cost"
                name="estimatedRepairCost"
                value={formData.estimatedRepairCost}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="repairShop">Repair Shop</label>
              <input
                type="text"
                className="form-control"
                id="repairShop"
                placeholder="Repair Shop"
                name="repairShop"
                value={formData.repairShop}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactInfo">Contact Info</label>
              <input
                type="text"
                className="form-control"
                id="contactInfo"
                placeholder="Contact Info"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleChange}
                required
              />
            </div>

            {/* Include input for capturing photos of the damage */}
            <div className="form-group">
              <label htmlFor="photos">Photos of Damage</label>
              <input
                type="file"
                multiple
                className="form-control"
                id="photos"
                name="photos"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="insuranceClaim">Insurance Claim</label>
              <input
                type="checkbox"
                id="insuranceClaim"
                name="insuranceClaim"
                checked={formData.insuranceClaim}
                onChange={() =>
                  setFormData({
                    ...formData,
                    insuranceClaim: !formData.insuranceClaim
                  })
                }
              />
            </div>

            <div className="text-center">
              <button
                className="signup-button"
                type="submit"
                disabled={
                  !formData.description ||
                  !formData.estimatedRepairCost ||
                  !formData.repairShop ||
                  !formData.contactInfo
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
