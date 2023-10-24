import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Life.css';

const App = () => {
  return (
      <>
      <Header/>
      <div style={{ margin: '40px 0' }}></div> 

      <div className="container1"> 
          <div className="col-sm1"> 
            <div class="card1"> 
              <div class="card-body1"> 
                <h5 class="card-title1">New Money Back Plan - 20 Years</h5> 
                <p class="card-text1">
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
      <p> Despite the fact that this is an endowment plan, it is also a linked product. This policy also allows you to save money on taxes while also ensuring your family's financial security. The sum assured is variable, meaning that the yearly premium is multiplied by ten, and the result is the total assured. This policy comes with the usual benefits, but it's also a linked plan that allows customers to invest through their insurance.</p>
                </p> 
                <Link to="/Endowment" class="btn btn-primary1">Go Form</Link>
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
