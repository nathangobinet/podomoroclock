import React from 'react';
import { connect } from 'react-redux';

import TimeInput from './TimeInput';
import {
  incrementBreak,
  incrementSession,
  decrementBreak,
  decrementSession,
} from '../redux/reducers';

const sessionMapState = (state) => ({
  value: state.times.session,
});

const breakMapState = (state) => ({
  value: state.times.break,
});

const sessionMapFunc = (dispatch) => ({
  increment: () => dispatch(incrementSession()),
  decrement: () => dispatch(decrementSession()),
});

const brekMapFunc = (dispatch) => ({
  increment: () => dispatch(incrementBreak()),
  decrement: () => dispatch(decrementBreak()),
});

const SessionTimeInput = connect(
  sessionMapState,
  sessionMapFunc,
)(TimeInput);
const BreakTimeInput = connect(
  breakMapState,
  brekMapFunc,
)(TimeInput);

const TimesConfigure = () => (
  <div className="row text-center times-container mb-5">
    <div className="col-12 mb-3"><h5>Times</h5></div>
    <div className="col-6 border-right">
      <span id="session-label">Session</span>
      <SessionTimeInput id="session" />
    </div>
    <div className="col-6">
      <span id="break-label">Break</span>
      <BreakTimeInput id="break" />
    </div>
  </div>
);

export default TimesConfigure;
