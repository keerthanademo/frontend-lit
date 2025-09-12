import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {FiMail} from 'react-icons/fi';
import "../styles/AdminLogin.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState({ message: "", type: "" });
  const navigate = useNavigate();

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      showToast("Please enter your email.", "error");
      return;
    }

    showToast("If this email exists, you will receive reset instructions.", "success");

    setTimeout(() => {
      navigate("/admin/verify-code", { state: { email } });
    }, 1500);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <Link to="/admin/login" className="back-link">← Back</Link>
        <h2 className="title">Reset Password</h2>
        <p className="subtitle">Enter your email address and we'll send you a verification code</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              {/* <span className="icon">📧</span> */}
              <FiMail className="input-icon" />
              <input
                type="email"
                id="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="send-button">Send Verification Code</button>
        </form>

       
      </div>

 {/* Toast Message */}
        {toast.message && (
          <div className={`toast ${toast.type === "success" ? "toast-success" : "toast-error"} show`}>
            {toast.message}
          </div>
        )}

    </div>
  );
};

export default ForgotPassword;
