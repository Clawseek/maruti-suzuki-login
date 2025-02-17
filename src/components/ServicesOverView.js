import React, { useState,useEffect } from "react";



import "../styles/ServicesOverView.css";

const ServicesOverViewTab = () => {
  
  

  const [data, setData] = useState(null);
  
   //Adding static  and configurable data//
   useEffect(() => {
    // If you're using Create React App and the file is in the public folder
    fetch('/datas/jsonvalidator.txt')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
       
        return response.text();
      })
      .then(data => setData(data))
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);
  

  return (
    <div className="services-overview-page">
      {/* Logo Section */}
      <div className="services-overview-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Maruti_Suzuki_logo.svg/1200px-Maruti_Suzuki_logo.svg.png"
          alt="Maruti Suzuki"
          className="logo"
        />
      </div>
      <header>
       
        <div className="header-right">
          <button className="langbutton">Select Language</button>
          <div className="user-info">
            <img src="user-avatar-url" alt="User Avatar" />
            <span>Amanda Auto</span>
          </div>
        </div>
      </header>

      <main>
        <section className="welcome-section">
          <h2>Welcome, Amanda Auto,</h2>
          <h3>Multilingual AI ChatBot</h3>
          <div className="tabs">
            <button>Service Overview</button>
            <button>Service Amount</button>
            <button>Service Status</button>
            <button>Report</button>
            <button>Invoice</button>
          </div>
          <div className="sub-tabs">
            <button>Key Features</button>
            <button>Our Top Benefits</button>
            <button>Pricing</button>
          </div>
          <div className="tab-content">
            <p>
            {data }
            </p>
          </div>
        </section>
        <aside className="offers-promotions">
          <h4>Offers & Promotions</h4>
          <div className="promotion">
            <img src="promotion-image-url" alt="Maruti Suzuki Rewards" />
            <p>Make your car ownership easy & convenient. Do it all with one app!</p>
          </div>
        </aside>
      </main>
      {/* Render your data here */}
      
      
    </div>
  );
};

export default ServicesOverViewTab;
