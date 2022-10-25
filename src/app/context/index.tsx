import React from 'react';
import Data from './../../data/data.json';

export type InitialState = {
  feedback: [];
  users: [];
  user: {};
  addFeedback?: () => void;
  questions: [];
};

const initialState: InitialState = {
  feedback: [],
  users: [],
  user: {},
  addFeedback: () => {},
  questions: [],
};

export const Feedback = React.createContext<InitialState | undefined>(
  undefined
);

const { Provider } = Feedback;

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ALL_QUESTIONS':
      return {
        ...state,
        questions: Data.questions,
      };

    case 'ADD_RESPONSE':
      return {
        ...state,
        questions: [...Data.questions, { response: action.payload }],
      };
    default:
      return null;
  }
};

const FeedbackContext = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const addFeedback = () => console.log('added');

  // action creator
  const dispatchQuestions = () => {
    return dispatch({ type: 'ALL_QUESTIONS' });
  };

  const add = React.useCallback(addFeedback, []);

  const { user, users, feedback, questions } = initialState;

  const value = React.useMemo(
    () => ({
      add,
      users,
      user,
      feedback,
      questions,
      state,
      dispatch,
      dispatchQuestions,
    }),
    [add, users, user, feedback, questions, state, dispatch]
  );

  return <Provider value={value}>{children}</Provider>;
};

export default FeedbackContext;
