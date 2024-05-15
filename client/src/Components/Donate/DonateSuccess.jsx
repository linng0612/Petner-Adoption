import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function DonateSuccess() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');
  const navigate = useNavigate();

  return (
    <div>
      <h1>Thank you for your donation!</h1>
      <p>Transaction ID: {token}</p>
      <button onClick={() => navigate('/')}>Go back to homepage</button>
    </div>
  );
}

export default DonateSuccess;