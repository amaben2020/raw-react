import React from 'react';
import Data from './../../data/data.json';
import { addResponse } from './actions/addResponse';

export type InitialState = {
  feedback: [];
  users: [];
  user: {};
  addFeedback?: () => void;
  questions: [];
  responses: [];
};

const initialState: InitialState = {
  feedback: [],
  users: [],
  user: {},
  addFeedback: () => {},
  questions: [],
  responses: [],
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

    // case 'ADD_RESPONSE':
    //   return {
    //     ...state,
    //     questions: [...Data.questions, { response: action.payload }],
    //   };

    case 'ADD_RESPONSE':
      return {
        ...state,
        responses: [...state.responses, action.payload],
      };

    // you have to pass in  the question id to remove it from the response array
    // when you skip, this is the intended functionality
    case 'REMOVE_RESPONSE':
      return {
        ...state,
        responses: state.responses.filter(
          (responses: any) => responses.id !== action.payload
        ),
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

  const dispatchResponses = (info: any) => {
    dispatch(addResponse(info));
  };

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
      dispatchResponses,
    }),
    [add, users, user, feedback, questions, state, dispatch]
  );

  //@ts-ignore
  return <Provider value={value}>{children}</Provider>;
};

export default FeedbackContext;
