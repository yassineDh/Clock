import React, { useState, useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { startTimer, reset, pauseTimer } from "../redux/actions/action";

function TimerComponent() {
  let sessionTime = useSelector((state) => state.sessionLength);
  let start = useSelector((state) => state.start);
  let pause = useSelector((state) => state.pause);
  const dispatch = useDispatch();
  // let timeLeft = moment(sessionTime, "mm");

  // let timeLeft = sessionTime * 60;
  let [timeLeft, settimeLeft] = useState(sessionTime * 60);

  // let timeONDisplay = "";

  let [timeONDisplay, settimeONDisplay] = useState(timeToDisplay(timeLeft));

  function timeToDisplay(timeToCal) {
    let minutes = Math.trunc(timeToCal / 60);
    minutes = minutes < 10 ? "0" + minutes.toString() : minutes.toString();
    let seconds = timeToCal % 60;
    seconds = seconds < 10 ? "0" + seconds.toString() : seconds.toString();
    return minutes + " : " + seconds;
  }

  let resetTime = () => {
    dispatch(reset());
  };

  let startAndStop = () => {
    dispatch(startTimer(!start));
    dispatch(pauseTimer(start));
  };

  useEffect(() => {
    // Update the document title using the browser API

    if (!start && !pause) {
      settimeLeft(sessionTime * 60);
    }
    if (start) {
      let timer1 = setTimeout(function () {
        settimeLeft((pre) => {
          settimeONDisplay(timeToDisplay(timeLeft));
          return (pre = pre - 1);
        });
        console.log(timeLeft);
        console.log(timeONDisplay);
      }, 1000);
    }
  });

  return (
    <div className="col-12">
      <div className="container-fluid">
        <div className="row">
          <h5 className="col-12" id="timer-label">
            Session
          </h5>
        </div>
        <div className="row">
          <h5 className="col-12" id="time-left">
            {timeONDisplay}
          </h5>
        </div>
        <div className="row">
          <div className="col-1">
            <button
              type="button"
              className="btn btn-primary text-center"
              id="start_stop"
              onClick={startAndStop}
            >
              start/pause
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-primary text-center"
              id="reset"
              onClick={resetTime}
            >
              reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimerComponent;
