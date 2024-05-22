import React, { createContext, useState } from 'react';

const DonateContext = createContext();

export const DonateProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);
  const [monthly, setMonthly] = useState(false);

  return (
    <DonateContext.Provider value={{ amount, setAmount, monthly, setMonthly }}>
      {children}
    </DonateContext.Provider>
  );
};

export default DonateContext;