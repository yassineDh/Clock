
import './App.css';
import BreakComponent from './components/BreakComponent';
import SessionComponent from './components/SessionComponent';
import TimerComponent from './components/TimerComponent';

function App() {
  return (
    <div className="container">

      <div className="row">
        <h2>25 + 5 Clock</h2>
      </div>
      
      <div className="row">
        <BreakComponent />
        <SessionComponent />
      </div>
      
      <div className="row">
        <TimerComponent />
      </div>
    </div>
  );
}

export default App;
