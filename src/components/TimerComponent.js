import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { startTimer, reset, pauseTimer, relax } from "../redux/actions/action";

function TimerComponent() {
  let sessionTime = useSelector((state) => state.sessionLength);
  let breakTime = useSelector((state) => state.breakLength);
  let start = useSelector((state) => state.start);
  let pause = useSelector((state) => state.pause);
  let isRelax = useSelector((state) => state.relax);
  const dispatch = useDispatch();
  const myRef = useRef();
  // let timeLeft = moment(sessionTime, "mm");

  // let timeLeft = sessionTime * 60;
  let [timeLeft, settimeLeft] = useState(sessionTime * 60);

  let audio = new Audio("audio/Spongebob Ringtone.mp3");
  // let timeONDisplay = "";
  console.log("newww");
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
    dispatch(startTimer(false));
    dispatch(pauseTimer(false));
    dispatch(relax(false));
    myRef.current.pause();
  };

  let startAndStop = () => {
    dispatch(startTimer(!start));
    dispatch(pauseTimer(start));
  };

  useEffect(() => {
    // Update the document title using the browser API
    // if (!start && !pause && !isRelax) {
    //   console.log(audio.paused);
    //   audio.pause();
    //   audio.currentTime = 0;

    // console.log("paused");
    // }
    if (!start && !pause) {
      settimeLeft(sessionTime * 60);
      settimeONDisplay(timeToDisplay(timeLeft));
      dispatch(relax(false));
    }
    if (start) {
      let timer1 = setTimeout(function () {
        settimeLeft((pre) => {
          if (pre < 0) {
            if (!isRelax) {
              dispatch(relax(true));
              // audio.play();
              // console.log(audio.paused);
              myRef.current.play();
              return breakTime * 60;
            }
            dispatch(startTimer(false));
            dispatch(pauseTimer(false));
            // return;
          }
          if (pre >= 0) settimeONDisplay(timeToDisplay(pre));
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
            {isRelax ? "Break" : "Session"}
          </h5>
        </div>
        <div className="row">
          <h5 className="col-12" id="time-left">
            {timeONDisplay}
            <audio ref={myRef} src="audio/Spongebob Ringtone.mp3" id="beep" />
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
