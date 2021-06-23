import {
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  RESET,
  START_TIMER,
  PAUSE_TIMER,
  RELAX,
} from "../types/types";

export const incrementBreak = () => {
  return {
    type: INCREMENT_BREAK,
    payload: 1,
  };
};

export const decrementBreak = () => {
  return {
    type: DECREMENT_BREAK,
    payload: 1,
  };
};

export const incrementSession = () => {
  return {
    type: INCREMENT_SESSION,
    payload: 1,
  };
};

export const decrementSession = () => {
  return {
    type: DECREMENT_SESSION,
    payload: 1,
  };
};

export const startTimer = (data) => {
  return {
    type: START_TIMER,
    payload: data,
  };
};
export const pauseTimer = (data) => {
  return {
    type: PAUSE_TIMER,
    payload: data,
  };
};

export const reset = () => {
  return {
    type: RESET,
    payload: { breakLength: 5, sessionLength: 25 },
  };
};

export const relax = (data) => {
  return {
    type: RELAX,
    payload: data,
  };
};
