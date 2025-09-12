import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../styles/AdminLogin.css"; // reuse existing CSS

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // Remove error and success state, replace with unified toast state:
  const [toast, setToast] = useState({ message: "", type: "" });

  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";

  // Function to show toast and auto-hide after 3 seconds
  const showToast = (message, type = "success") => {
    setToast({ message, type });

    setTimeout(() => {
      setToast({ message: "", type: "" });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      showToast("Please fill in all fields.", "error");
      return;
    }

    if (password !== confirmPassword) {
      showToast("Passwords do not match.", "error");
      return;
    }

    showToast("Password reset successfully! Redirecting to login...", "success");

    setTimeout(() => {
      navigate("/admin/login");
    }, 2000);
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <div className="top-link">
        <Link to="/admin/login" className="back-link">← Back</Link></div>
        <h1>Reset Password</h1>

        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="input-group">
            <label>New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Reset Password
          </button>
        </form>
      </div>

 {/* Toast Message */}
        {toast.message && (
          <div
            className={`toast ${
              toast.type === "success" ? "toast-success" : "toast-error"
            } show`}
          >
            {toast.message}
          </div>
        )}

    </div>
  );
};

export default ResetPassword;
