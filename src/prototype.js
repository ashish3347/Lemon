import React, { useState } from 'react';

function Prototype() {
  const [subscriptionType, setSubscriptionType] = useState('weekly');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscriptionChange = (e) => {
    setSubscriptionType(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Add further actions here, like sending data to a backend
  };

  return (
    <div className="subscription-container">
      <h2>Food Subscription Service</h2>
      <p>Select your preferred subscription and enjoy delicious meals every week or month!</p>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>

          <label>
            Subscription Type:
            <select
              value={subscriptionType}
              onChange={handleSubscriptionChange}
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </label>

          <button type="submit">Subscribe Now</button>
        </form>
      ) : (
        <div>
          <h3>Thank you for subscribing!</h3>
          <p>You have subscribed to our {subscriptionType} plan.</p>
        </div>
      )}
    </div>
  );
}

export default Prototype;
