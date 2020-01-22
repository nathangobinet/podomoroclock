import React from 'react';
import PropTypes from 'prop-types';

const TimeInput = (props) => {
  const {
    value, increment, decrement, id,
  } = props;
  return (
    <div className="mt-2">
      <div>
        <button onClick={() => increment(value * 60)} aria-label="Increment time" id={`${id}-increment`} type="button">
          <i className="fas fa-caret-up" />
        </button>
      </div>
      <div id={`${id}-length`}>{value / 60}</div>
      <div>
        <button onClick={() => decrement(value * 60)} aria-label="Decrement time" id={`${id}-decrement`} type="button">
          <i className="fas fa-caret-down" />
        </button>
      </div>
    </div>
  );
};

TimeInput.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default TimeInput;
