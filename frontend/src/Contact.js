import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file
import Header from './Header';
import Footer from './Footer';
import Chat from './pages/Chat';

function Contact() {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);

  const toggleDetails1 = () => {
    setShowDetails1(!showDetails1);
  };

  const toggleDetails2 = () => {
    setShowDetails2(!showDetails2);
  };

  const toggleDetails3 = () => {
    setShowDetails3(!showDetails3);
  };

  return (
    <>
    <Header/>
  
    <div style={{ margin: '40px 0' }}></div> 
    <h1
  style={{
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'pink',
    textAlign: 'center', 
    cursor: 'pointer', 
  }}
>
  Click The Button To Get The Contact Details
</h1>


    <div className="contact-component">
      <button className="life-insurance-button" onClick={toggleDetails1}>Life Insurance</button>
      {showDetails1 && (
        <div className="details">
          <div className="box">
            <h3>Contact for Life Insurance</h3>
            <ul>
              <li>Name: John Doe</li>
              <li>Email: john@example.com</li>
              <li>Phone: 123-456-7890</li>
              <li>Address: 123 Main St, City</li>
            </ul>
          </div>
          <div className="box">
            <h3>Contact for Life Insurance</h3>
            <ul>
              <li>Name: Bob Johnson</li>
              <li>Email: bob@example.com</li>
              <li>Phone: 555-123-4567</li>
              <li>Address: 789 Oak St, Village</li>
            </ul>
          </div>
        </div>
      )}

      <button className="home-insurance-button" onClick={toggleDetails2}>Home Insurance</button>
      {showDetails2 && (
        <div className="details">
          <div className="box">
            <h3>Contact for Home Insurance</h3>
            <ul>
              <li>Name: Jane Smith</li>
              <li>Email: jane@example.com</li>
              <li>Phone: 987-654-3210</li>
              <li>Address: 456 Elm St, Town</li>
            </ul>
          </div>
          <div className="box">
            <h3>Contact for Home Insurance</h3>
            <ul>
              <li>Name: Bob Johnson</li>
              <li>Email: bob@example.com</li>
              <li>Phone: 555-123-4567</li>
              <li>Address: 789 Oak St, Village</li>
            </ul>
          </div>
        </div>
      )}

      <button className="car-insurance-button" onClick={toggleDetails3}>Car Insurance</button>
      {showDetails3 && (
        <div className="details">
          <div className="box">
            <h3>Contact for Car Insurance</h3>
            <ul>
              <li>Name: Bob Johnson</li>
              <li>Email: bob@example.com</li>
              <li>Phone: 555-123-4567</li>
              <li>Address: 789 Oak St, Village</li>
            </ul>
          </div>
          <div className="box">
            <h3>Contact for Car Insurance</h3>
            <ul>
              <li>Name: Bob Johnson</li>
              <li>Email: bob@example.com</li>
              <li>Phone: 555-123-4567</li>
              <li>Address: 789 Oak St, Village</li>
            </ul>
          </div>
        </div>
      )}
    </div>
    <div style={{ margin: '40px 0' }}></div> 
<Chat/>
    <Footer/>

    </>
  );
}

export default Contact;
