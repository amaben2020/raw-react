import React from 'react';
import { Feedback, InitialState } from '../context/index';

const useCtx = () => {
  //@ts-ignore
  const { dispatchResponses, state, questions, users, add, dispatchQuestions } =
    React.useContext<InitialState | undefined>(Feedback);

  return {
    dispatchResponses,
    state,
    questions,
    users,
    add,
    dispatchQuestions,
  };
};

export default useCtx;
