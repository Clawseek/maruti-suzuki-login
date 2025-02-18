import React from "react";

const ForgotPasswordLink = ({ onClick }) => (
  <div className="form-group text-end mb-3">
    <button type="button" onClick={onClick} className="btn btn-link text-decoration-none">
      Forgot your password?
    </button>
  </div>
);

export default ForgotPasswordLink;

