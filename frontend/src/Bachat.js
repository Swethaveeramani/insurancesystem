import React, { useState } from "react";
import Footer from './Footer';
import Header from './Header';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    term: "",
    age: "",
    gender: "",
    contactNumber: "",
    nomineeName: "",
    nomineeRelation: "",
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
          <h1 className="signup-heading">Bachat Form</h1>
          <form onSubmit={handleSubmit}>
            
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="John Doe"
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
              <label htmlFor="term">Select Term:</label>
              <select
                id="term"
                name="term"
                value={formData.term}
                onChange={handleChange}
                required
              >
                <option value="">Select Term</option>
                <option value="9 years">9 years</option>
                <option value="12 years">12 years</option>
                <option value="15 years">15 years</option>
              </select>
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
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="text"
                className="form-control"
                id="contactNumber"
                placeholder="Contact Number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="nomineeName">Nominee Name</label>
              <input
                type="text"
                className="form-control"
                id="nomineeName"
                placeholder="Nominee Name"
                name="nomineeName"
                value={formData.nomineeName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="nomineeRelation">Nominee Relation</label>
              <input
                type="text"
                className="form-control"
                id="nomineeRelation"
                placeholder="Nominee Relation"
                name="nomineeRelation"
                value={formData.nomineeRelation}
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
      !formData.term ||
      !formData.age ||
      !formData.gender ||
      !formData.contactNumber ||
      !formData.nomineeName ||
      !formData.nomineeRelation
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
