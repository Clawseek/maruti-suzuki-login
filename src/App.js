import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import LoginForm from "./components/LoginForm";
import ForgotPasswordModal from "./components/ForgotPasswordModal";
import ServicesOverViewTab from "./components/ServicesOverView";

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordModal />} />

      
          <Route path="/services" element={<ServicesOverViewTab />} />

          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
