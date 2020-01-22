import React from 'react';
import PropTypes from 'prop-types';

const RemainingTime = (props) => {
  const { remaining } = props;
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const formatedMinutes = (`0${minutes}`).slice(-2);
  const formatedseconds = (`0${seconds}`).slice(-2);
  return (
    <span id="time-left">{`${formatedMinutes}:${formatedseconds}`}</span>
  );
};

RemainingTime.propTypes = {
  remaining: PropTypes.number.isRequired,
};

export default RemainingTime;
