import React, { useState } from "react";
import AuthService from "../services/AuthService";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import ForgotPasswordLink from "./ForgotPasswordLink";
import LoginButton from "./LoginButton";
import PrivacyPolicyLink from "./PrivacyPolicyLink";
import ForgotPasswordModal from "./ForgotPasswordModal";
import { ToastContainer, toast } from 'react-toastify';
import Logo from "./Logo";
import 'react-toastify/dist/ReactToastify.css';
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
      toast.error("Login Credential Incorrect. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: '#F8D7DA', color: '#721C24', border: '1px solid #F5C6CB', borderRadius: '5px' },
        icon: <i className="fas fa-exclamation-circle"></i>
      });
    }
  };

  const handleShowModal = (event) => {
    event.preventDefault();
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="login-page">
      {/* Logo Section */}
      <div className="logo-container">
        <Logo />
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
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
