import React from 'react';
import './About.css';
import Header from './Header';
import Footer from './Footer';
import Chat from './pages/Chat';
const App = () => {
  return (
<>
<Header/>
    <div className="container0">
      <div className="card0">
        {/* Left side (image) */}
        <div className="col-md-6">
          <img
            src="https://www.licnepal.com.np/wp-content/uploads/2019/01/Home-Banner_2.jpg"
            className="card-img-top"
            alt="Card Image"
          />
        </div>

        {/* Right side (content) */}
        <div className="col-md-6 card-body0">
          <h5 className="card-title0">LIFE INSURANCE</h5>
          <p className="card-text0">
            Efficiently manage life insurance policies within our integrated system, ensuring streamlined policy creation, premium tracking, and claims processing for a seamless user experience.<strong>New Money Back Plan - 20 Years</strong>
        The 20 year new money back plan comes with not only death benefits and maturity benefits, similar to other life insurance plans but it also has the major advantage of survival benefits as well as optional benefits.
        <strong>New Money Back Plan - 25 Years</strong>This plan is very similar to New money Back Plan except the difference in Term and the years, the benefits are paid out. 
        <strong>LIC's Jeevan Tarun</strong>Jeevan Tarun plan is specially designed to meet the educational and other needs of growing children through annual survival benefit payments from ages 20 to 24 years and Maturity Benefit at the age of 25 years. 
        <strong>New Bima Bachat Plan</strong>This plan has a money back advantage for it's users in the most convenient terms of nine , 12 and 15 years.<strong>New Children's Money Back Plan</strong>This particular plan is made to serve the needs of the a growing child, whether it is in the form of education or nurture his skills at a sport. This plan intends to help children through adulthood with ease. This insurance policy that can be a great gift for your child is meant for children whose parents like to plan ahead<strong>LIC's New Endowment Plus</strong>Despite the fact that this is an endowment plan, it is also a linked product. This policy also allows you to save money on taxes while also ensuring your family's financial security. The sum assured is variable, meaning that the yearly premium is multiplied by ten, and the result is the total assured. This policy comes with the usual benefits, but it's also a linked plan that allows customers to invest through their insurance.
        </p>
        </div>
      </div>
    <div className="card0" style={{ marginTop: '40px' }}>
        {/* Right side (content) */}
    <div className="col-md-6 card-body-container">
      <h5 className="card-title0">HOME INSURANCE</h5>
      <p className="card-text0">
        <strong>Fire & Special Perils Covered</strong>This insurance policy covers physical loss or damage, or destruction caused to insured property due to fire, explosion, storm, earthquake and other unforeseen events specified in the policy wordings.<strong>Burglary & Theft Cover</strong>Coverage against loss and damage caused by burglary, theft, robbery of home contents and personal money. You can also opt for an add-on to cover personal belongings of domestic help and guests. <strong>Key Replacement Cover</strong>This policy reimburses the cost of obtaining keys form a locksmith if you are locked out of your home due to the loss or theft of your keys. It also reimburses the cost of replacing your locks and keys if your home is broken.<strong>Loss of Rent/ Alternative Accommodation</strong>We pay the amount of rent you lose or alternative rent you pay while your home building is not fit for living because of any physical loss/damage arising out of an insured event. 
      </p>
    </div>
    {/* Left side (image) */}
    <div className="col-md-6 image-container">
      <img
        src="https://www.oyerinsurance.com/wp-content/uploads/2023/02/The-three-most-important-things-to-look-for-in-a-home-insurance-policy.png"
        className="card-img-top"
        alt="Card Image"
      />
    </div>
  </div>
  <div className="card0" style={{ marginTop: '40px' }}>
    {/* Left side (image) */}
    <div className="col-md-6 image-container">
      <img
        src="https://s28126.pcdn.co/blogs/ask-experian/wp-content/uploads/Tips-for-First-Time-Car-Buyers-1400x934-1-900x600.jpg"
        className="card-img-top"
        alt="Card Image"
      />
    </div>
        {/* Right side (content) */}
    <div className="col-md-6 card-body-container">
      <h5 className="card-title0">CAR INSURANCE</h5>
      <p className="card-text0">
       <strong>CarDamageByDriver</strong>This section provides information about car damage caused by the driver's mistake.Car damage by the mistake of the driver can occur due to various factors, including Accidents like collisions with other vehicles, stationary objects, or pedestrians can result in damage, Errors such as misjudging turns, failing to brake in time, or not paying attention while driving can lead to accidents.Parking Mishaps: Drivers may accidentally damage their vehicles while parking, such as scraping against walls, poles, or other cars.<strong>DamagesInsidecar</strong>This section describes any damages that occurred inside the car, such as interior damage.Objects in the Car: Loose objects inside the car can become projectiles during an accident. 
Structural Damage: The car's structural components can be damaged during an accident, leading to deformation of the vehicle's interior.Glass Shattering: During a severe collision, car windows can shatter, causing glass fragments to scatter inside the car.<strong>DamageOfCar</strong>This section provides an overview of damages to the exterior of the car.This section describes any damages that occurred inside the car, such as interior damage.The front bumper accounts for nearly a third of all accident damage. While head on accidents aren’t nearly as common, rear end accidents provide damage to other cars.Fender are tied with the headlights when it comes to damage. Damage to the grille represents twenty percent of all damage during collision. Wheels Damage and Repair in Waterdown .Wheels take a beating.
      </p>
    </div>
  </div>
  </div>
  <Chat/>
  <Footer/>
  </>
  );
};

export default App;
