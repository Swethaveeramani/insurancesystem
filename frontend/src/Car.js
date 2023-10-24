import React from 'react';
import { Link } from 'react-router-dom';
import './Car.css';
import Header from './Header';
import Footer from './Footer';
const App = () => {
  return (
    <>
    <Header/>
    <div style={{ margin: '40px 0' }}></div> 

      <div className="container3"> 
          <div className="col-sm3"> 
            <div class="card3"> 
              <div class="card-body3"> 
                <h5 class="card-title3">CarDamageByDriver</h5> 
                <p class="card-text3">
      <p>This section provides information about car damage caused by the driver's mistake.Car damage by the mistake of the driver can occur due to various factors, including Accidents like collisions with other vehicles, stationary objects, or pedestrians can result in damage, Errors such as misjudging turns, failing to brake in time, or not paying attention while driving can lead to accidents.Parking Mishaps: Drivers may accidentally damage their vehicles while parking, such as scraping against walls, poles, or other cars.
    </p>
                </p> 
                <Link to="/CarDamageForm" class="btn btn-primary3">Go Form</Link>
                <Link to="/DamByCar" class="btn btn-primary3">Get Your Premium</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="space-between-cards"></div>
        <div className="container3"> 
          <div className="col-sm3"> 
            <div class="card3"> 
              <div class="card-body3"> 
                <h5 class="card-title3">DamagesInsidecar</h5> 
                <p class="card-text3">
      <p>This section describes any damages that occurred inside the car, such as interior damage.Objects in the Car: Loose objects inside the car can become projectiles during an accident. 
Structural Damage: The car's structural components can be damaged during an accident, leading to deformation of the vehicle's interior.Glass Shattering: During a severe collision, car windows can shatter, causing glass fragments to scatter inside the car.

</p>                </p> 
                <Link to="/DamagesInsideCarForm" class="btn btn-primary3">Go Form</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="space-between-cards"></div>
        <div className="container3"> 
          <div className="col-sm3"> 
            <div class="card3"> 
              <div class="card-body3"> 
                <h5 class="card-title3">DamageOfCar</h5> 
                <p class="card-text3">
      <p>This section provides an overview of damages to the exterior of the car.This section describes any damages that occurred inside the car, such as interior damage.The front bumper accounts for nearly a third of all accident damage. While head on accidents aren’t nearly as common, rear end accidents provide damage to other cars.Fender are tied with the headlights when it comes to damage. Damage to the grille represents twenty percent of all damage during collision. Wheels Damage and Repair in Waterdown .Wheels take a beating. That is why they represent fifteen percent of all damage done to vehicles in a collision.</p>
                </p> 
                <Link to="/DamageOfCarForm" class="btn btn-primary3">Go Form</Link>
              </div>
            </div>
          </div>
        </div>
        <div style={{ margin: '70px 0' }}></div> 
 
        <Footer/>
    </>
  );
};
export default App; 
