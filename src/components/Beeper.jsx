import React from 'react';

const Beeper = () => (
  <audio id="beep" preload="auto" src="https://goo.gl/65cBl1">
    <track kind="captions" label="No caption available" />
  </audio>
);

export default Beeper;
