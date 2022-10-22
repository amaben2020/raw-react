import React from 'react';
import { Feedback, InitialState } from '../context/index';

const useCtx = () => {
  const info = React.useContext<InitialState>(Feedback);

  return info;
};

export default useCtx;
