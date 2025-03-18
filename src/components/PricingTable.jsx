import React from "react";
import "../styles.css";

const PricingTable = () => {
  const plans = [
    { name: "Basic", price: "$9.99", features: ["1 Project", "Basic Support"] },
    { name: "Pro", price: "$19.99", features: ["5 Projects", "Priority Support"] },
    { name: "Enterprise", price: "$49.99", features: ["Unlimited Projects", "24/7 Support"] },
  ];

  return (
    <section className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3>{plan.name}</h3>
            <h4>{plan.price}/mo</h4>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;
