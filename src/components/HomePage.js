// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import BalanceService from '../services/BalanceService';
import ServiceCard from './ServiceCard';
import RefreshButton from './RefreshButton';
import '../styles/HomePage.css';

const HomePage = () => {
  const [balance, setBalance] = useState(0);
  const [language, setLanguage] = useState('English');

  useEffect(() => {
    fetchBalance();
  }, []);

  const fetchBalance = async () => {
    try {
      const fetchedBalance = await BalanceService.getBalance();
      setBalance(fetchedBalance);
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="home-page">
      <header className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Maruti_Suzuki_logo.svg/1200px-Maruti_Suzuki_logo.svg.png"
          alt="Maruti Suzuki"
          className="logo"
        />
        <nav>
          <span>Home</span> / <span>Account Details</span>
        </nav>
        <div className="language-selector">
          <label htmlFor="language">Select Language:</label>
          <select id="language" value={language} onChange={handleLanguageChange}>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
        <div className="user-info">
          <span>Amanda Auto</span>
        </div>
      </header>
      <main>
        <h1>Welcome, Amanda Auto</h1>
        <h2>All-in-one Service Plans</h2>
        <p>Total 12 service plans</p>
        <div className="balance-section">
          <h4>Available Balance: ₹ {balance.toFixed(2)}</h4>
          <RefreshButton onClick={fetchBalance} />
        </div>
        <div className="service-plans">
          <ServiceCard 
            serviceName="Multilingual AI ChatBot"
            description="It helps you see how many more days you need to work to reach your financial goal for the month and year."
            detailsPage="/service-details/ai-chatbot"
            isActive={true}
          />
          {/* Inactive Service Cards */}
          <ServiceCard 
            serviceName="Service Plan Name" 
            description="It helps you see how many more days you need to work to reach your financial goal for the month and year."
            detailsPage="#"
            isActive={false}
          />
          <ServiceCard 
            serviceName="Service Plan Name" 
            description="It helps you see how many more days you need to work to reach your financial goal for the month and year."
            detailsPage="#"
            isActive={false}
          />
          <ServiceCard 
            serviceName="Service Plan Name" 
            description="It helps you see how many more days you need to work to reach your financial goal for the month and year."
            detailsPage="#"
            isActive={false}
          />
        </div>
        <div className="offers-promotions">
          <h3>Offers & Promotions</h3>
          <p>MARUTI SUZUKI REWARDS: Make your car ownership easy & convenient. Do it all with one app!</p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
