import React from 'react';
import { connect } from 'react-redux';
import { handlePlay, handleStop, restartAction } from '../redux/reducers';
import RemainingTime from './RemainingTime';
import TimeController from './TimeController';

const remainingMapState = (state) => ({
  remaining: state.remaining,
});

const timeControllerMapState = (state) => ({
  type: state.type,
  isRunning: state.isRunning,
});

const timeControllerMapFunc = (dispatch) => ({
  stop: () => handleStop(dispatch),
  play: () => handlePlay(dispatch),
  restart: () => { dispatch(restartAction()); },
});

const RemainingTimeContainer = connect(remainingMapState, null)(RemainingTime);
const TimeControllerContainer = connect(
  timeControllerMapState,
  timeControllerMapFunc,
)(TimeController);

const TimeBox = () => (
  <div className="text-center mb-5">
    <div className="time-container">
      <RemainingTimeContainer />
      <hr />
      <TimeControllerContainer />
    </div>
  </div>
);

export default TimeBox;
