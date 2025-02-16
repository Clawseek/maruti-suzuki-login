import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import LoginForm from "./components/LoginForm";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
