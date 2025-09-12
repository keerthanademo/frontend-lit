import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/context-admin/AuthContext';
import { FiLock, FiMail, FiEye, FiEyeOff } from 'react-icons/fi';
import '../styles/AdminLogin.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Toast state
  const [toast, setToast] = useState({ message: '', type: '' });

  // ✅ Show toast and auto-hide after 3 seconds
  const showToast = (message, type = 'success') => {
    setToast({ message, type });

    setTimeout(() => {
      setToast({ message: '', type: '' });
    }, 3000);
  };

  // Handle redirect path
  let redirectParam = new URLSearchParams(location.search).get('redirect');
  if (!redirectParam) {
    redirectParam = sessionStorage.getItem('redirectAfterLogin');
  } else {
    sessionStorage.setItem('redirectAfterLogin', redirectParam);
  }

  let redirectPath = '/admin/dashboard';
  if (redirectParam === 'ecommerce') {
    redirectPath = '/admin/ecomDashboard';
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const success = login(credentials.email, credentials.password);

    if (success) {
      showToast('Login successful! Redirecting...', 'success');
      setTimeout(() => {
        navigate(redirectPath);
      }, 2000);
    } else {
      showToast('Invalid email or password', 'error');
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-card">
        <div className="login-icon-circle">
          <FiLock size={24} />
        </div>
        <h2 className="login-title">Admin Login</h2>
        <p className="login-subtitle">Enter your credentials to access the dashboard</p>

        <form onSubmit={handleLogin} className="admin-login-form">
          <div className="input-group">
            <label>Email Address</label>
            <div className="input-with-icon">
              <FiMail className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="admin@example.com"
                value={credentials.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-with-icon">
              <FiLock className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="••••••••"
                value={credentials.password}
                onChange={handleChange}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {/* {showPassword ? <FiEyeOff /> : <FiEye />} */}
              </span>
            </div>
          </div>

          <button type="submit" className="login-button">Log In</button>
        </form>

        <div className="login-links">
          <Link to="/admin/forgot-password">Forgot your password?</Link>
        </div>
      </div>

      {/* ✅ Toast Message */}
      {toast.message && (
        <div
          className={`toast ${toast.type === 'success' ? 'toast-success' : 'toast-error'} show`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
