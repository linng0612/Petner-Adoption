import { useContext } from 'react';
import { AdoptContext } from '../Contexts/adoptContext';

export const useAdopt = () => {
  const { adoptValue, setAdoptValue } = useContext(AdoptContext);

  // Add any additional logic here

  return { adoptValue, setAdoptValue };
};