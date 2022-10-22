import React from 'react';
import { Feedback, InitialState } from '../context/index';

const useCtx = () => {
  const data = React.useContext<InitialState>(Feedback);

  if (!data) {
    throw new Error('useAppState must be used within the AppProvider');
  }

  return data;
};

export default useCtx;
