import React from 'react';

const ServiceStatus = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Welcome, Amanda Auto,</h2>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Multilingual AI ChatBot</h3>
        <div style={{ marginLeft: '10px', padding: '5px 10px', backgroundColor: '#4CAF50', color: 'white', borderRadius: '5px' }}>
          Active
        </div>
      </div>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <button style={{ marginRight: '10px' }}>Service Overview</button>
        <button style={{ marginRight: '10px' }}>Service Amount</button>
        <button style={{ marginRight: '10px', borderBottom: '2px solid blue' }}>Service Status</button>
        <button style={{ marginRight: '10px' }}>Report</button>
        <button>Invoice</button>
      </div>
      <div>
        <h4>Current Service Status</h4>
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
          <div style={{ marginBottom: '10px' }}>
            <strong>Recharge Plan Name:</strong> <span style={{ color: 'green' }}>Basic Plan</span>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <strong>Total Minutes Recharged:</strong> 100 minutes
          </div>
          <div style={{ marginBottom: '10px' }}>
            <strong>Usage:</strong> 56 minutes used
          </div>
          <div>
            <strong>Balance:</strong> <span style={{ color: 'blue' }}>44 minutes out of total 100 minutes left</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h4>Offers & Promotions</h4>
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
          <img src="https://via.placeholder.com/150" alt="Promotion" style={{ marginRight: '10px' }} />
          <div>
            <h5>MARUTI SUZUKI REWARDS</h5>
            <p>Make your car ownership easy & convenient. Do it all with one app!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceStatus;
