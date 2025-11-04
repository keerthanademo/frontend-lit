import React from "react";
import "./sign.css"; 

const Sign = () => {
  return (
    <div className="page-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="left-content">
          <img
            src="https://luxuryintaste.blob.core.windows.net/auth-template/images/lit-logo.png"
            alt="LIT Logo"
          />
          <h1>
            WELCOME BACK<br />
            <span className="gradient-text">TO YOUR STYLE!</span>
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="form-container">
          <div id="api" data-name="SelfAsserted">
            <div className="error" style={{ display: "none" }}></div>
            <div className="Title">
              <h2>Sign in</h2>
            </div>
            <div
              className="Title-h2"
              style={{
                fontSize: "10px",
                paddingTop: "10px",
                paddingBottom: "15px",
                color: "#a0aec0",
              }}
            >
              <h2>Sign in with email address</h2>
            </div>

            <div className="entry-item">
              <input
                type="email"
                id="email"
                placeholder="Yourname@gmail.com"
                required
              />
            </div>

            <div className="entry-item">
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="forgot-wrapper">
              <a
                id="forgotPassword"
                href="https://testingloginn.b2clogin.com/testingloginn.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_passwordreset1&client_id=b705c7a7-558f-4da6-b003-7f32694ad5ab&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=openid&response_type=id_token&prompt=login"
                style={{
                  color: "#a0aec0",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                Forgot your password?
              </a>
            </div>

            <div className="buttons">
              <button id="SignIn">Sign in</button>
            </div>
          </div>

          <div
            className="signup-link"
            style={{ textAlign: "center", marginTop: "1.5rem" }}
          ></div>

          <div className="form-footer">
            Forgot your password?
            <a
              href="https://testingloginn.b2clogin.com/testingloginn.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_passwordreset1&client_id=b705c7a7-558f-4da6-b003-7f32694ad5ab&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fwww.luxuryintaste.com%2Fauth%2Fcallback&scope=openid&response_type=id_token&prompt=login"
              style={{
                color: "rgb(192, 132, 252)",
                transition: "color 0.3s ease",
              }}
            >
              Click here.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
