import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import './Premium.css';
import Chat from './pages/Chat';

function Premium() {
  return (
    <>
      <Header />
      <div style={{ margin: '10px 0' }}></div>
      <div className="container19">
        <div className="row premium-card-row">
          <div className="col-sm-4">
            <div className="card19">
              <div className="card-body19">
                <h5 className="card-title19">New Money Back Plan - 20 Years</h5>
                <p className="card-text19">
                  <h2>Life Insurance</h2>
                  <p>
                    The 20-year new money-back plan comes with not only death benefits and maturity benefits, similar to other life insurance plans, but it also has the major advantage of survival benefits as well as optional benefits. This money-back plan also is a participating policy that allows the policyholder to enjoy simple reversionary bonuses from LIC as a part of participating in the company's profits.
                  </p>
                  <h2>August-November (Limited offer Month)</h2>
                </p>
                <Link to="/Money20">
                  <button className="premium-button">Learn More</button>
                </Link>
                
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card19">
              <div className="card-body19">
                <h5 className="card-title19">Fire & Special Perils Covered</h5>
                <p className="card-text19">
                  <h2>Home Insurance</h2>
                  <p>This insurance policy covers physical loss or damage, or destruction caused to insured property due to fire, explosion, storm, earthquake and other unforeseen events specified in the policy wordings.</p>
                  <h2>October-November (Limited offer Month)</h2>
                </p>
                <Link to="/Fireinsurance">
                  <button className="premium-button">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card19">
              <div className="card-body19">
                <h5 className="card-title19">Damages Inside the Car</h5>
                <p className="card-text19">
                  <h2>Car Insurance</h2>
                  <p>This section describes any damages that occurred inside the car, such as interior damage.Objects in the Car: Loose objects inside the car can become projectiles during an accident. 
Structural Damage: The car's structural components can be damaged during an accident, leading to deformation of the vehicle's interior.Glass Shattering: During a severe collision, car windows can shatter, causing glass fragments to scatter inside the car.
                  </p> 
                  <h2>September-November (Limited offer Month)</h2>
                </p>
                <Link to="/DamByCar">
                  <button className="premium-button">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chat/>
      <Footer />
    </>
  );
}

export default Premium;
