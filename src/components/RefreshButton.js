// src/components/RefreshButton.js
import React from 'react';
import '../styles/RefreshButton.css';

const RefreshButton = ({ onClick }) => (
  <button className="refresh-button" onClick={onClick}>
    <i className="fas fa-sync-alt"></i>
  </button>
);

export default RefreshButton;
