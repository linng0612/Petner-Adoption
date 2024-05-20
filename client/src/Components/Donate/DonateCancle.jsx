import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function DonateCancel() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');
  const navigate = useNavigate();
  return (
    <div className="donate-background">
      <div className="success-cancel">
        <h1>Donation Cancelled</h1>
        <p>Your donation has been cancelled. If this was a mistake, please try again.</p>
        <p>Transaction ID: {token}</p>
        <button onClick={() => navigate('/')} className="btn">Go back to homepage</button>
      </div>
    </div>
  );
}

export default DonateCancel;