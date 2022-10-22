import React from 'react';
import { Feedback, FeedbackContextProps } from '../context/index';

const useCtx = () => {
  const info = React.useContext<FeedbackContextProps | null>(Feedback);

  return info;
};

export default useCtx;
