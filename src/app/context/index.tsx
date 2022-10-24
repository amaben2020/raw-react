import React, { useState } from 'react';
import Data from './../../data/data.json';

export type InitialState = {
  feedback: [];
  users: [];
  user: {};
  addFeedback?: () => void;
};

const initialState: InitialState = {
  feedback: [],
  users: [],
  user: {},
  addFeedback: () => {},
};

export const Feedback = React.createContext<InitialState>(initialState);

const { Provider } = Feedback;

const FeedbackContext = ({ children }: { children: React.ReactNode }) => {
  const addFeedback = () => console.log('added');

  const add = React.useCallback(addFeedback, []);

  const { user, users, feedback } = initialState;

  const value = React.useMemo(
    () => ({
      add,
      users,
      user,
      feedback,
    }),
    [add, users, user, feedback]
  );

  return <Provider value={value}>{children}</Provider>;
};

export default FeedbackContext;
