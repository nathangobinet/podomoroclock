import React from 'react';

const Beeper = () => (
  <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/nathangobinet/podomoroclock/master/ressources/beep4.wav">
    <track kind="captions" label="No caption available" />
  </audio>
);

export default Beeper;
