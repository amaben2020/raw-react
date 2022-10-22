import React from 'react';
import FeedbackContext from './context';
import Users from './pages/Users';

const Root = () => {
  return (
    <FeedbackContext>
      <Users />
    </FeedbackContext>
  );
};

export default Root;
