import React, { useState } from 'react';
import './Paymentpage.css';
import Chat from './pages/Chat';

function PaymentPage() {
  const stripeSecretKey = process.env.REACT_APP_STRIPE_SECRET_KEY;
  const stripeApiKey = process.env.REACT_APP_STRIPE_API_KEY;

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardName, setCardName] = useState('');
  const [country, setCountry] = useState('');

  const selectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
  };

  const [processingPayment, setProcessingPayment] = useState(false);

  const processPayment = () => {
    const parsedAmount = parseFloat(amount);

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setPaymentStatus('Please enter a valid amount.');
      return;
    }

    if (!selectedPaymentMethod) {
      setPaymentStatus('Please select a payment method.');
      return;
    }

    if (!cardNumber || !expiration || !cvc || !cardName || !country) {
      setPaymentStatus('Please fill out all the card details.');
      return;
    }

    // Disable input details during payment processing
    setProcessingPayment(true);

    // Simulate a successful payment after a short delay
    setPaymentStatus('Payment sent successfully!');

    setTimeout(() => {
      // Clear the success message and re-enable input details after 3 seconds
      setPaymentStatus('');
      setProcessingPayment(false);
    }, 3000);
  };

  return (
    <>
    <div className="payment-container">
      <div className="payment-methods">
      <h2>Select Payment Method</h2>
        <div
          className={`payment-method ${selectedPaymentMethod === 'gpay' ? 'selected' : ''}`}
          onClick={() => selectPaymentMethod('gpay')}
        >
          <img
            className="payment-icon"
            src="https://static.vecteezy.com/system/resources/previews/021/672/629/non_2x/google-pay-logo-transparent-free-png.png"
            alt="Google Pay"
          />
          Google Pay
        </div>
        <div
          className={`payment-method ${selectedPaymentMethod === 'phonepe' ? 'selected' : ''}`}
          onClick={() => selectPaymentMethod('phonepe')}
        >
          <img
            className="payment-icon"
            src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png"
            alt="PhonePe"
          />
          PhonePe
        </div>
        <div
          className={`payment-method ${selectedPaymentMethod === 'upi' ? 'selected' : ''}`}
          onClick={() => selectPaymentMethod('upi')}
        >
          <img
            className="payment-icon"
            src="https://getlogo.net/wp-content/uploads/2020/10/unified-payments-interface-upi-logo-vector.png"
            alt="UPI"
          />
          UPI
        </div>
      </div>
      <div className="atm-details">
        <h2>ATM Card Details</h2>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            disabled={processingPayment}
          />
        </div>
        <div>
          <label>MM/YY (Expiration Date):</label>
          <input
            type="text"
            value={expiration}
            onChange={(e) => setExpiration(e.target.value)}
            required
            disabled={processingPayment}
          />
        </div>
        <div>
          <label>CVC:</label>
          <input
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            required
            disabled={processingPayment}
          />
        </div>
        <div>
          <label>Name on Card:</label>
          <input
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
            disabled={processingPayment}
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            disabled={processingPayment}
          />
        </div>
      </div>
      <div className="amount-payment">
        <label>Enter Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          disabled={processingPayment}
        />
        <button onClick={processPayment} disabled={processingPayment}>
          Payment
        </button>
      </div>
      <div className="payment-result">
      {paymentStatus && (
          <div>
            <p id="payment-status">{paymentStatus}</p>
            <p>Amount Paid: ₹{parseFloat(amount).toFixed(2)}</p>
          </div>
        )}
        {(selectedPaymentMethod === 'gpay' || selectedPaymentMethod === 'phonepe' || selectedPaymentMethod === 'upi') && (
          <img
            className="payment-image"
            src="/Swetha_Gpay.jpeg"
            alt={`${selectedPaymentMethod} Image`}
          />
        )}
      </div>
      </div>
      <Chat/>
      </>
  );
}

export default PaymentPage;
