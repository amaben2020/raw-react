import React from 'react';
import { Feedback, InitialState } from '../context/index';

const useCtx = () => {
  //@ts-ignore
  const { dispatch, state, questions, users, add, dispatchQuestions } =
    React.useContext<InitialState | undefined>(Feedback);
  console.log(dispatch);
  return {
    dispatch,
    state,
    questions,
    users,
    add,
    dispatchQuestions,
  };
};

export default useCtx;
