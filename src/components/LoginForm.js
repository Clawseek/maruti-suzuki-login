import React, { useState } from "react";
import AuthService from "../services/AuthService";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import ForgotPasswordLink from "./ForgotPasswordLink";
import LoginButton from "./LoginButton";
import PrivacyPolicyLink from "./PrivacyPolicyLink";
import ForgotPasswordModal from "./ForgotPasswordModal";
import "../styles/LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const token = await AuthService.login(username, password);
      login(token);
      navigate("/home");
    } catch (error) {
      setError("Invalid credentials");
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="login-page">
      {/* Logo Section */}
      <div className="logo-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Maruti_Suzuki_logo.svg/1200px-Maruti_Suzuki_logo.svg.png"
          alt="Maruti Suzuki"
          className="logo"
        />
      </div>

      {/* Login Form */}
      <div className="login-card">
        <h3 className="text-center mb-4">Log In</h3>
        <form onSubmit={handleLogin}>
          <InputField
            label="User name *"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          <InputField
            label="Password *"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <ForgotPasswordLink onClick={handleShowModal} />
          {error && <div className="alert alert-danger">{error}</div>}
          <LoginButton />
        </form>
        <PrivacyPolicyLink />
      </div>
      <ForgotPasswordModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default LoginForm;
