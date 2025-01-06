import React from "react";

const Payment = () => {
  const handlePayment = () => {
    // Here, you can integrate a payment gateway (e.g., Stripe, PayPal).
    alert("Payment successful! Your order has been placed.");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Payment</h1>
      <div className="text-center">
        <h3>Order Summary</h3>
        <p>Your total is: $XXX.XX</p>
        <button
          className="btn btn-success"
          onClick={handlePayment}
        >
          Complete Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
