import React from 'react';
import { Link } from 'react-router-dom';
const App = () => {
  return (
   <>
       <div style={{ margin: '70px 0' }}></div> 
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div class="card">
              <img src="https://images.ctfassets.net/uwf0n1j71a7j/6nJDaJZx5A52FcHagWmkcw/897aa77d8076f43d680ed68f19f42226/life-insurance.png" class="card-img-top" alt="Card Image" width="190px" />
              <div class="card-body">
                <h5 class="card-title">Life Insurance</h5>
                <p class="card-text">Efficiently manage life insurance policies within our integrated system, ensuring streamlined policy creation, premium tracking, and claims processing for a seamless user experience.</p>
                <Link to="/Life" class="btn btn-primary">All Life Insurance Scheme</Link>
              </div>
            </div>
          </div>
          </div>
          <div className="col-sm">
            <div class="card">
              <img src="https://e0.pxfuel.com/wallpapers/342/584/desktop-wallpaper-home-insurance.jpg" class="card-img-top" alt="Card Image" width="190px" />
              <div class="card-body">
                <h5 class="card-title">Home Insurance</h5>
                <p class="card-text">Safeguard homes with our tailored insurance plans,seamlessly administered through our comprehensive management system,offering hassle-free management and claims processing.</p>
                <Link to="/Home" class="btn btn-primary">All Home Insurance Scheme</Link>
              </div>
              </div>
            </div>
          <div className="col-sm">
            <div class="card">
              <img src="https://images.squarespace-cdn.com/content/v1/5f5bc60959cec6440c4d5dbc/1613755580893-HX0ZRGF7M0ZNDKGSEXLO/auto+insurance.jpg" class="card-img-top" alt="Card Image" width="190px" />
              <div class="card-body">
                <h5 class="card-title">Car Insurance</h5>
                <p class="card-text">Manage car insurance effortlessly through our advanced system, providing users with convenient policy updates, premium monitoring, and efficient claims resolution for a smooth experience.</p>
                <Link to="/Car" class="btn btn-primary">All Car Insurance Scheme</Link>
              </div>
            </div>
          </div>
        </div>
        <div style={{ margin: '40px 0' }}></div> 
        </>
  );
};
export default App;
