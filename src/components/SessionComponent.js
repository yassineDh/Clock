import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementSession,
  decrementSession,
  pauseTimer,
} from "../redux/actions/action";

function SessionComponent() {
  let sessionTime = useSelector((state) => state.sessionLength);
  let start = useSelector((state) => state.start);
  const dispatch = useDispatch();

  let incremet = () => {
    if (!start) {
      dispatch(incrementSession());
      dispatch(pauseTimer(false));
    }
  };
  let decremet = () => {
    if (!start) {
      dispatch(decrementSession());
      dispatch(pauseTimer(false));
    }
  };

  return (
    <div className="col-3">
      <div className="container-fluid">
        <div className="row">
          <h5 className="col-12" id="session-label">
            Session Length
          </h5>
        </div>
        <div className="row">
          <div className="col-2">
            <button
              type="button"
              className="btn btn-primary text-center"
              id="session-increment"
              onClick={incremet}
            >
              +
            </button>
          </div>
          <div className="col-3 text-center" id="session-length">
            {sessionTime}
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-primary text-center"
              id="session-decrement"
              onClick={decremet}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SessionComponent;
