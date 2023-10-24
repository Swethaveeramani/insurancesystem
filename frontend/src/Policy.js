import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Life.css';
import './Home.css';
import './Car.css';
import './Policy.css';
import Header from './Header';
import Footer from './Footer';
import Chat from './pages/Chat';
const ImageGallery = () => {
    
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: 'https://img.freepik.com/premium-photo/indian-family-sitting-with-umbrella-white-background-selective-focus_466689-31775.jpg?size=626&ext=jpg&ga=GA1.2.801941692.1694189064&semt=ais',
      description: (<React.Fragment>
        <div className="container1"> 
            <div className="col-sm1"> 
              <div class="card1"> 
                <div class="card-body1"> 
                  <h5 class="card-title1">New Money Back Plan - 20 Years</h5> 
                  <p class="card-text1">
                  <h2> Money back plan</h2>
        <p>The 20 year new money back plan comes with not only death benefits and maturity benefits, similar to other life insurance plans but it also has the major advantage of survival benefits as well as optional benefits. This money back plan also is a participating policy which allows the policyholder to enjoy simple reversionary bonuses from LIC as a part of participating in the company's profits..</p>
                  </p> 
                  <Link to="/InsuranceForm" class="btn btn-primary1">Go Form</Link>
                  <Link to="/Money20" class="btn btn-primary3">Get Your Premium</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="space-between-cards"></div>
          <div className="container1"> 
            <div className="col-sm1"> 
              <div class="card1"> 
                <div class="card-body1"> 
                  <h5 class="card-title1">New Money Back Plan - 25 Years: </h5> 
                  <p class="card-text1">
                  <h2> New money Back Plan </h2>
        <p>This plan is very similar to New money Back Plan except the difference in Term and the years, the benefits are paid out. This plan also has a survival benefit along with the regular death and maturity benefit. It is a participating money back plan which means that the policyholder also enjoys an amount from the company's profit. The fact remains that LIC is one of the leading insurance providers in India which means the company does make profits often.</p>                </p> 
                  <Link to="/RegistrationForm" class="btn btn-primary1">Go Form</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="space-between-cards"></div>
          <div className="container1"> 
            <div className="col-sm1"> 
              <div class="card1"> 
                <div class="card-body1"> 
                  <h5 class="card-title1">LIC's Jeevan Tarun</h5> 
                  <p class="card-text1">
                  <h2>Jeevan Tarun plan</h2>
        <p> Jeevan Tarun plan is specially designed to meet the educational and other needs of growing children through annual survival benefit payments from ages 20 to 24 years and Maturity Benefit at the age of 25 years. It is a flexible plan wherein at proposal stage the proposer can choose the proportion of Survival Benefits to be availed during the term of the policy. Note that this policy can be bought by a grandparent or parent for their grandchildren or children as long as they are less than 12 years of age.</p>
                  </p> 
                  <Link to="/Jeevan" class="btn btn-primary1">Go Form</Link>
                </div>
              </div>
            </div>
          </div> 
          <div className="space-between-cards"></div>
          <div className="container1"> 
            <div className="col-sm1"> 
              <div class="card1"> 
                <div class="card-body1"> 
                  <h5 class="card-title1">New Bima Bachat Plan</h5> 
                  <p class="card-text1">
                  <h2>Bima Bachat Plan</h2>
        <p> This plan has a money back advantage for it's users in the most convenient terms of nine , 12 and 15 years. In these terms within the interval of three years, people can enjoy the money back advantage of 15% of the sum assured. Also, this product requires only a large lump sum one-time premium, which is also a good one time-investment plan if you are looking for a long-term investment.</p>
                  </p> 
                  <Link to="/Bachat" class="btn btn-primary1">Go Form</Link>
                </div>
              </div>
            </div>
          </div> 
          <div className="space-between-cards"></div>
          <div className="container1"> 
            <div className="col-sm1"> 
              <div class="card1"> 
                <div class="card-body1"> 
                  <h5 class="card-title1">New Children's Money Back Plan</h5> 
                  <p class="card-text1">
                  <h2> Children's Money Back Plan</h2>
        <p> This particular plan is made to serve the needs of the a growing child, whether it is in the form of education or nurture his skills at a sport. This plan intends to help children through adulthood with ease. This insurance policy that can be a great gift for your child is meant for children whose parents like to plan ahead.</p>
                  </p> 
                  <Link to="/NewChildren" class="btn btn-primary1">Go Form</Link>
                </div>
              </div>
            </div>
          </div> 
          <div className="space-between-cards"></div>
          <div className="container1"> 
            <div className="col-sm1"> 
              <div class="card1"> 
                <div class="card-body1"> 
                  <h5 class="card-title1">LIC's New Endowment Plus</h5> 
                  <p class="card-text1">
                  <h2>LIC's New Endowment </h2>
        <p> Despite the fact that this is an endowment plan, it is also a linked product. This policy also allows you to save money on taxes while also ensuring your family's financial security. The sum assured is variable, meaning that the yearly premium is multiplied by ten, and the result is the total assured. This policy comes with the usual benefits, but it's also a linked plan that allows customers to invest through their insurance.</p>
                  </p> 
                  <Link to="/Endowment" class="btn btn-primary1">Go Form</Link>
                </div>
              </div>
            </div>
          </div> 
      </React.Fragment>)
    },

    {
      id: 2,
      src: 'https://img.freepik.com/premium-photo/white-podium-shelf-empty-pedestal-display-minimal-style-blank-stand-product-placement-premium-photo-3d-rendering_381336-80.jpg?size=626&ext=jpg&ga=GA1.2.801941692.1694189064&semt=ais',
      description: ( <React.Fragment>
        <div className="container2"> 
            <div className="col-sm2"> 
              <div class="card2"> 
                <div class="card-body2"> 
                  <h5 class="card-title2">Fire & Special Perils Covered</h5> 
                  <p class="card-text2">
                  <h2>Fire & Special Perils Covered</h2>
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
                  <h2>Burglary & Theft Cover</h2>
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
                  <h2>Key Replacement Cover</h2>
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
                  <h2>Loss of Rent/ Alternative Accommodation</h2>
                  <p>We pay the amount of rent you lose or alternative rent you pay while your home building is not fit for living because of any physical loss/damage arising out of an insured event. </p>
                  </p> 
                  <Link to="/LossOfRentForm" class="btn btn-primary2">Go Form</Link>
                </div>
              </div>
            </div>
          </div> 
      </React.Fragment>)
    },
    
    {
        id: 3,
        src: 'https://img.freepik.com/free-photo/vertical-closeup-shot-person-thinking-buying-new-car-selling-vehicle_181624-21006.jpg?size=626&ext=jpg&ga=GA1.1.801941692.1694189064&semt=ais',
        description: (<React.Fragment>
            <div className="container3"> 
                <div className="col-sm3"> 
                  <div class="card3"> 
                    <div class="card-body3"> 
                      <h5 class="card-title3">CarDamageByDriver</h5> 
                      <p class="card-text3">
                      <h2>Car Damage by the Mistake of the Driver</h2>
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
                      <h2>Damages Inside the Car</h2>
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
                      <h2>Damages of the Car</h2>
            <p>This section provides an overview of damages to the exterior of the car.This section describes any damages that occurred inside the car, such as interior damage.The front bumper accounts for nearly a third of all accident damage. While head on accidents aren’t nearly as common, rear end accidents provide damage to other cars.Fender are tied with the headlights when it comes to damage. Damage to the grille represents twenty percent of all damage during collision. Wheels Damage and Repair in Waterdown .Wheels take a beating. That is why they represent fifteen percent of all damage done to vehicles in a collision.</p>
                      </p> 
                      <Link to="/DamageOfCarForm" class="btn btn-primary3">Go Form</Link>
                    </div>
                  </div>
                </div>
              </div> 
          </React.Fragment>)
      },
    
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
    <Header/>
    <div>
        <h1 class="header-text">
  Live Your Best Life Today, Your Tomorrow is Secured with Us
</h1>
<h1 class="header-text">Click the photo to get your Policy</h1>

      <div className="image-container22">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Image ${image.id}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="image-description22">
          <h2>About {selectedImage.id}</h2>
          <p>{selectedImage.description}</p>
        </div>
      )}
    </div>
    <Chat/>
    <Footer/>
    </>
  );
};

export default ImageGallery;
