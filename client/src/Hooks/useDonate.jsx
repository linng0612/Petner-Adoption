
import { useContext } from 'react';
import DonateContext from '../Contexts/donateContext';

const useDonate = () => {
  const context = useContext(DonateContext);
  if (context === undefined) {
    throw new Error('useDonate must be used within a DonateProvider');
  }
  return context;
};

export default useDonate;