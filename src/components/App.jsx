import React from 'react';
import TimeBox from './TimeBox';
import TimesConfigure from './TimesConfigure';
import Beeper from './Beeper';

const App = () => (
  <div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center">
      <div className="col-12">
        <div className="text-center">
          <h1>Pomodoro clock</h1>
        </div>
        <TimeBox />
        <TimesConfigure />
        <Beeper />
        <footer className="col-12 text-center pt-5">
                    Made with
          <span aria-label="love" role="img"> ♥ </span>
          <span>by </span>
          <a href="https://github.com/nathangobinet/podomoroclock" target="_blank" rel="noopener noreferrer">Nathan Gobinet</a>
        </footer>
      </div>
    </div>
  </div>
);

export default App;
