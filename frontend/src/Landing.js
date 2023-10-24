import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect to the signin page after 10 seconds
      navigate("/Login");
    }, 10000); // 10000 milliseconds = 10 seconds

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [navigate]);

  return (
    <div>
      <h1>Welcome to My Site</h1>
      {/* Your landing page content */}
    </div>
  );
};

export default LandingPage;
