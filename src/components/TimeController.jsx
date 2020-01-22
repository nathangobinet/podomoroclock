import React from 'react';
import PropTypes from 'prop-types';

const TimeController = (props) => {
  const {
    type,
    stop,
    play,
    restart,
    isRunning,
  } = props;
  return (
    <div className="d-flex justify-content-around align-items-center">
      <button onClick={isRunning ? stop : play} aria-label="Play/Pause" id="start_stop" type="button">
        <i className={`fas ${isRunning ? 'fa-pause' : 'fa-play'}`} />
      </button>
      <span id="timer-label">{type}</span>
      <button onClick={restart} aria-label="REstart" id="reset" type="button"><i className="fas fa-history" /></button>
    </div>
  );
};

TimeController.propTypes = {
  type: PropTypes.string.isRequired,
  stop: PropTypes.func.isRequired,
  play: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
};

export default TimeController;
