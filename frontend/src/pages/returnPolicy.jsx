import React from "react";
import "../styles/returnPolicy.css";
import {
  FaBoxOpen,
  FaSyncAlt,
  FaCheckCircle,
  FaBan,
  FaMoneyBillWave,
  FaEnvelope,
} from "react-icons/fa";

const ReturnPolicy = () => {
  return (
    <div className="policy-container">
      <h1>Cancellation & Refund Policy</h1>

      <section>
        <h2>
          <FaBoxOpen className="icon" /> For E-Commerce Orders (House of LIT)
        </h2>
        <p>
          You may cancel your order within <strong>2 hours</strong> of placing it,
          provided it hasn’t been shipped.
        </p>
      </section>

      <section>
        <h2>
          <FaSyncAlt className="icon" /> How to Place a Return Request
        </h2>
        <ol>
          <li>Go to <strong>Settings</strong> in the LIT app or website.</li>
          <li>Tap on <strong>“Your Orders”</strong>.</li>
          <li>Select the product you want to return.</li>
          <li>Tap <strong>“Return Order”</strong> and follow the steps.</li>
        </ol>
        <p className="warning">
          <strong>⚠ IMPORTANT:</strong> A mandatory unboxing video must be uploaded
          during the return request if the item is damaged or defective. Without
          this video, the return will not be accepted.
        </p>
      </section>

      <section>
        <h2>
          <FaCheckCircle className="icon" /> Return Eligibility
        </h2>
        <ul>
          <li>Return must be initiated within <strong>48 hours</strong> of delivery.</li>
          <li>
            Item must be in original, unused, and intact condition with all tags,
            labels, and packaging.
          </li>
          <li>Return is only accepted if:</li>
          <ul className="nested-list">
            <li>The product is damaged or defective on arrival.</li>
            <li>The item is significantly different from what was ordered.</li>
          </ul>
        </ul>
      </section>

      <section>
        <h2>
          <FaBan className="icon" /> Non-Returnable Products
        </h2>
        <ul>
          <li>Accessories, beauty items, and clearance sale products.</li>
          <li>Any product returned without proper packaging or signs of use.</li>
          <li>Items without a valid unboxing video (for damage claims).</li>
        </ul>
      </section>

      <section>
        <h2>
          <FaMoneyBillWave className="icon" /> Refunds
        </h2>
        <ul>
          <li>
            Once your return is approved and the item passes quality checks, your
            refund will be initiated within <strong>5–7 business days</strong> to your
            original payment method.
          </li>
        </ul>
      </section>

      <section className="contact">
        <p>
          <FaEnvelope className="icon" /> For questions or escalations, write to us at{" "}
          <a href="mailto:info@luxuryintaste.com">info@luxuryintaste.com</a>
        </p>
      </section>
    </div>
  );
};

export default ReturnPolicy;
