import React from 'react';

type InitialState = {
  feedback: [];
  users: [];
  user: {};
};

export type FeedbackContextProps = {
  initialState: InitialState;
  addFeedback?: () => void;
};

const initialState: InitialState = {
  feedback: [],
  users: [],
  user: {},
};

export const Feedback = React.createContext<FeedbackContextProps | null>(null);

const { Provider } = Feedback;

const addFeedback = () => console.log('added');

const FeedbackContext = ({ children }: { children: React.ReactNode }) => {
  return <Provider value={{ addFeedback, initialState }}>{children}</Provider>;
};

export default FeedbackContext;
