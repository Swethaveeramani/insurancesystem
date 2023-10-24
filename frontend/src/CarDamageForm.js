import React, { useState } from "react";
import Footer from './Footer';
import Header from './Header';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    driverName: "",
    accidentDate: "",
    description: "",
    carMake: "",
    carModel: "",
    licensePlate: "",
    insuranceCompany: "",
    estimatedRepairCost: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/api/CarDamageForm", {
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
    <Header/>
      <div className="top-margin"></div>
      <div className="signup-container">
        <div className="signup-form">
          <h1 className="signup-heading">Car Damage Form</h1>
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
              <label htmlFor="driverName">Driver's Name</label>
              <input
                type="text"
                className="form-control"
                id="driverName"
                placeholder="John Doe"
                name="driverName"
                value={formData.driverName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="accidentDate">Accident Date</label>
              <input
                type="text"
                className="form-control"
                id="accidentDate"
                placeholder="MM/DD/YYYY"
                name="accidentDate"
                value={formData.accidentDate}
                onChange={handleChange}
                required
              />
            </div>

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
              <label htmlFor="carMake">Car Make</label>
              <input
                type="text"
                className="form-control"
                id="carMake"
                placeholder="Car Make"
                name="carMake"
                value={formData.carMake}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="carModel">Car Model</label>
              <input
                type="text"
                className="form-control"
                id="carModel"
                placeholder="Car Model"
                name="carModel"
                value={formData.carModel}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="licensePlate">License Plate</label>
              <input
                type="text"
                className="form-control"
                id="licensePlate"
                placeholder="License Plate"
                name="licensePlate"
                value={formData.licensePlate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="insuranceCompany">Insurance Company</label>
              <input
                type="text"
                className="form-control"
                id="insuranceCompany"
                placeholder="Insurance Company"
                name="insuranceCompany"
                value={formData.insuranceCompany}
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

            
            <div className="text-center">
              <button
                className="signup-button"
                type="submit"
                disabled={
                  !formData.email ||
                  !formData.driverName ||
                  !formData.accidentDate ||
                  !formData.description ||
                  !formData.carMake ||
                  !formData.carModel ||
                  !formData.licensePlate ||
                  !formData.insuranceCompany ||
                  !formData.estimatedRepairCost
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
