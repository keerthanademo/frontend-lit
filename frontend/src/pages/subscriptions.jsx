import React from "react";
import "../styles/subscriptions.css";

const PricingPage = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>Pricing & Subscriptions</h1>
        <p>
          Choose a plan that fits your playstyle — unlock premium benefits and
          enjoy more perks!
        </p>
      </div>

      <div className="pricing-section">
        <h2>For Subscriptions</h2>
        <p>
          <strong>Weekly Plan:</strong> ₹999
          <br />
          <strong>Monthly Plan:</strong> ₹499
        </p>
        <p className="note">
          Unlock premium game features like unlimited lives (limited time),
          exclusive sales, saved product history, and other subscriber-only
          benefits.
        </p>

        <h2>For Products (House of LIT)</h2>
        <ul>
          <li>
            All prices are in INR and include applicable GST unless otherwise
            stated.
          </li>
          <li>
            Prices are dynamic and may vary depending on brand/vendor pricing,
            seasonal campaigns, or inventory.
          </li>
          <li>
            Discount codes, gem redemptions, and coupon offers are valid per
            terms mentioned at checkout and cannot be clubbed unless specified.
          </li>
        </ul>

        <h2>Subscription Terms</h2>
        <ul>
          <li>
            Subscription charges (weekly/monthly) are non-refundable once
            activated.
          </li>
          <li>
            You may cancel your auto-renewal anytime via account settings.
          </li>
          <li>No partial refunds are applicable.</li>
        </ul>
      </div>
    </div>
  );
};

export default PricingPage;
