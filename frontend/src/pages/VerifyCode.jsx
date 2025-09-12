import React, { useState, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../styles/AdminLogin.css";

const VerifyCode = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const [code, setCode] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; // Only allow single digit (0-9)

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const enteredCode = code.join("");

    if (enteredCode.length < 6) {
      setError("Please enter the full verification code.");
      return;
    }

    if (enteredCode === "123456") {
      setSuccess("Verification successful! Redirecting...");
      setTimeout(() => {
        navigate("/admin/reset-password", { state: { email } });
      }, 2000);
    } else {
      setError("Invalid verification code. Please try again.");
      setCode(new Array(6).fill("")); 
    }
  };

  return (
    <div className="admin-login-container">
  <div className="admin-login-box">
    
    <div className="top-link">
      <Link to="/admin/forgot-password">← Back</Link>
    </div>

    <h1>Verify Code</h1>

    

    <form onSubmit={handleVerify} className="admin-login-form">
      <div className="otp-box-wrapper">
        <p className="otp-instruction">Enter the 6-digit code sent to your email:</p>
        <div className="otp-inputs">
          {code.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              ref={(el) => (inputsRef.current[idx] = el)}
              className="otp-box"
            />
          ))}
        </div>
      </div>

      <button type="submit" className="login-button">Verify Code</button>
    </form>
  </div>

 {(error || success) && (
  <div className={`toast ${error ? "toast-error" : "toast-success"} show`}>
    {error || success}
  </div>
)}

</div>

  );
};

export default VerifyCode;
