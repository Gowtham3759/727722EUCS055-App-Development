import React from 'react';
import './Payment.css';

const Payment = () => {
    const handlePay=()=>
    {
        alert('payment successful');
    }
    return (
        <div className="payment-container">
            <div className="payment-form">
                <h2>Payment Information</h2>
                <form>
                    <div className="form-group">
                        <label className="form-label">Cardholder's Name</label>
                        <input type="text" className="form-input" placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Card Number</label>
                        <input type="text" className="form-input" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Expiration Date</label>
                        <input type="text" className="form-input" placeholder="MM/YY" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">CVV</label>
                        <input type="text" className="form-input" placeholder="123" />
                    </div>
                    <button type="submit" className="pay-button" onClick={handlePay}>Pay</button>
                </form>
            </div>
        </div>
    );
}

export default Payment;
