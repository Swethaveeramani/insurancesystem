import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Home.css';

const App = () => {
  return (
    <>
    <Header/>
    <div style={{ margin: '40px 0' }}></div> 

      <div className="container2"> 
          <div className="col-sm2"> 
            <div class="card2"> 
              <div class="card-body2"> 
                <h5 class="card-title2">Fire & Special Perils Covered</h5> 
                <p class="card-text2">
                <p>This insurance policy covers physical loss or damage, or destruction caused to insured property due to fire, explosion, storm, earthquake and other unforeseen events specified in the policy wordings.</p>
                </p> 
                <Link to="/Fire" class="btn btn-primary2">Go Form</Link>
                <Link to="/Fireinsurance" class="btn btn-primary3">Get Your Premium</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container2"> 
          <div className="col-sm2"> 
            <div class="card2"> 
              <div class="card-body2"> 
                <h5 class="card-title2">Burglary & Theft Cover</h5> 
                <p class="card-text2">
                <p>Coverage against loss and damage caused by burglary, theft, robbery of home contents and personal money. You can also opt for an add-on to cover personal belongings of domestic help and guests. </p>
                </p>
                <Link to="/BurglaryTheftForm" class="btn btn-primary2">Go Form</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container2"> 
          <div className="col-sm2"> 
            <div class="card2"> 
              <div class="card-body2"> 
                <h5 class="card-title2">Key Replacement Cover</h5> 
                <p class="card-text2">
                <p>This policy reimburses the cost of obtaining keys form a locksmith if you are locked out of your home due to the loss or theft of your keys. It also reimburses the cost of replacing your locks and keys if your home is broken into.</p>
                </p> 
                <Link to="/ReplaceForm" class="btn btn-primary2">Go Form</Link>
              </div>
            </div>
          </div>
        </div> 
        <div className="container2"> 
          <div className="col-sm2"> 
            <div class="card2"> 
              <div class="card-body2"> 
                <h5 class="card-title2">Loss of Rent/ Alternative Accommodation</h5> 
                <p class="card-text2">
                <p>We pay the amount of rent you lose or alternative rent you pay while your home building is not fit for living because of any physical loss/damage arising out of an insured event. </p>
                </p> 
                <Link to="/LossOfRentForm" class="btn btn-primary2">Go Form</Link>
              </div>
            </div>
          </div>
        </div> 
        <div style={{ margin: '40px 0' }}></div> 
        <Footer/>
        </>
  );
};
export default App; 
