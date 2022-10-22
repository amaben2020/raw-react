import React from 'react';

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

const addFeedback = React.useMemo(() => console.log('added'), []);

const FeedbackContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider
      // provided values to other components (consumers)
      value={{
        addFeedback,
        users: initialState.users,
        user: initialState.user,
        feedback: initialState.feedback,
      }}
    >
      {children}
    </Provider>
  );
};

export default FeedbackContext;
