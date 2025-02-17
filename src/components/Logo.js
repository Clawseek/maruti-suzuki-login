// src/components/Logo.js
import React from "react";
import logo from '../assets/maruti-suzuki-logo.svg';

const Logo = () => (
  <div className="text-center">
    <img src={logo} alt="Maruti Suzuki" className="logo" />
  </div>
);

export default Logo;
