// src/components/ForgotPasswordModal.js
import React from "react";
import { Modal, Button } from "react-bootstrap";
import Logo from "./Logo";
import "../styles/ForgotPasswordModal.css";

const ForgotPasswordModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Forget Your Password if necessary?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <Logo />
        </div>
        <p className="text-center mb-4">
          If you need assistance with your password, please contact our MSIL team at <strong>999XX00XXX</strong> or [email icon].
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Back to Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ForgotPasswordModal;
