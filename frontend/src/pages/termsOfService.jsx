import React from "react";
import "../styles/termsOfService.css";

const TermsOfService = () => {
  return (
    <div className="terms-container">
      <h1>Terms & Conditions</h1>

      <p>
        These Terms & Conditions (“Terms”) govern your use of the <strong>LIT</strong> platform,
        owned and operated by <strong>Faslit Accor Private Limited</strong>.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be 13 years or older to use LIT. Users under 18 should use the platform under
        parental or guardian supervision.
      </p>

      <h2>2. User Conduct</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Misuse the game or services via bots, hacks, or exploits</li>
        <li>Use offensive language or harass other users</li>
        <li>Manipulate point systems or subscriptions</li>
      </ul>

      <h2>3. Account & Subscriptions</h2>
      <ul>
        <li>Users are responsible for safeguarding their login credentials</li>
        <li>Subscription plans renew automatically unless cancelled</li>
        <li>No refunds will be issued once a subscription is activated</li>
      </ul>

      <h2>4. Game Points & Rewards</h2>
      <ul>
        <li>Points, gems, and rewards have no monetary value outside the platform</li>
        <li>Rewards cannot be traded, sold, or exchanged for cash</li>
      </ul>

      <h2>5. E-Commerce</h2>
      <ul>
        <li>Product prices and availability are subject to change</li>
        <li>Discounts and offers may vary or be discontinued without notice</li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        All content including logos, design, images, and games belong to Faslit Accor Pvt. Ltd. or
        its licensors. Unauthorized use is prohibited.
      </p>

      <h2>7. Suspension & Termination</h2>
      <p>
        LIT reserves the right to suspend or terminate accounts that violate these Terms.
      </p>

      <p className="link">
        <strong>Full Terms & Conditions: </strong>
        <a
          href="https://luxuryintaste.com/terms-and-conditions"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://luxuryintaste.com/terms-and-conditions
        </a>
      </p>
    </div>
  );
};

export default TermsOfService;
