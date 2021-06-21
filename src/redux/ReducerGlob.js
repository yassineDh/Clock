import {
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  RESET,
  START_TIMER,
  PAUSE_TIMER
} from "./types/types";

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  start: false,
  pause: false,
};

const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_BREAK:
      if (state.breakLength >= 59) return { ...state, breakLength: 59 };
      return { ...state, breakLength: state.breakLength + action.payload };
    case DECREMENT_BREAK:
      if (state.breakLength <= 1) return { ...state, breakLength: 1 };
      return { ...state, breakLength: state.breakLength - action.payload };
    case INCREMENT_SESSION:
      if (state.sessionLength >= 59) return { ...state, sessionLength: 59 };
      return { ...state, sessionLength: state.sessionLength + action.payload };
    case DECREMENT_SESSION:
      if (state.sessionLength <= 1) return { ...state, sessionLength: 1 };
      return { ...state, sessionLength: state.sessionLength - action.payload };
    case START_TIMER:
      return { ...state, start: action.payload };
    case PAUSE_TIMER:
      return { ...state, pause: action.payload };
    case RESET:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default editorReducer;
