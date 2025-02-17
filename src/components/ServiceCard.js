// src/components/ServiceCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ServiceCard.css';

const ServiceCard = ({ serviceName, description, detailsPage, isActive }) => {
  const navigate = useNavigate();

  return (
    <div className={`service-card ${isActive ? 'active' : 'inactive'}`}>
      <h5>{serviceName}</h5>
      <p>{description}</p>
      {isActive ? (
        <button className="btn btn-link" onClick={() => navigate(detailsPage)}>View Details</button>
      ) : (
        <span className="btn btn-link disabled">View Details</span>
      )}
    </div>
  );
};

export default ServiceCard;
