import React, { useState } from 'react';

export const AdoptContext = React.createContext();

export const AdoptProvider = ({ children }) => {
  const [adoptValue, setAdoptValue] = useState(null);

  return (
    <AdoptContext.Provider value={{ adoptValue, setAdoptValue }}>
      {children}
    </AdoptContext.Provider>
  );
};