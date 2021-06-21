import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementBreak, decrementBreak } from "../redux/actions/action";

function BreakComponent() {
  let breakTime = useSelector((state) => state.breakLength);
  const dispatch = useDispatch();

  let incremet = () => {
    dispatch(incrementBreak());
  };
  let decremet = () => {
    dispatch(decrementBreak());
  };

  return (
    <div className="col-3">
      <div className="container-fluid">
        <div className="row">
          <h5 className="col-12" id="break-label">
            Break Length
          </h5>
        </div>
        <div className="row">
          <div className="col-2">
            <button
              type="button"
              className="btn btn-primary text-center"
              id="break-increment"
              onClick={incremet}
            >
              +
            </button>
          </div>
          <div className="col-3 text-center" id="break-length">
            {breakTime}
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-primary text-center"
              id="break-decrement"
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

export default BreakComponent;
