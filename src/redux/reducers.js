const DEFAULT_TIMES = {
  session: 25 * 60,
  break: 5 * 60,
};

// Action const
const RESTART = 'RESTART';
const TIMER_TICK = 'TIMER_TICK';
const TIMER_RUNNING = 'TIMER_RUNNING';
const TIMER_STOP = 'TIMER_STOP';

const INCREMENT_SESSION = 'INCREMENT_SESSION';
const DECREMENT_SESSION = 'DECREMENT_SESSION';
const INCREMENT_BREAK = 'INCREMENT_BREAK';
const DECREMENT_BREAK = 'DECREMENT_BREAK';

// State type const
const SESSION = 'SESSION';
const BREAK = 'BREAK';

let interval;

const tick = () => ({
  type: TIMER_TICK,
});

const timerRunning = () => ({
  type: TIMER_RUNNING,
});

const timerStop = () => ({
  type: TIMER_STOP,
});

const handlePlay = (dispatch) => {
  dispatch(timerRunning());
  interval = setInterval(() => dispatch(tick()), 1000);
};

const handleStop = (dispatch) => {
  dispatch(timerStop());
};

function switchSessionBreak(state) {
  document.getElementById('beep').play();
  if (state.type === SESSION) {
    return {
      ...state,
      type: BREAK,
      remaining: state.times.break,
    };
  }
  return {
    ...state,
    type: SESSION,
    remaining: state.times.session,
  };
}

function decrement(state) {
  if (state.remaining > 0) {
    return {
      ...state,
      remaining: state.remaining - 1,
    };
  }
  return switchSessionBreak(state);
}

const getDefaultState = () => ({
  type: SESSION,
  remaining: DEFAULT_TIMES.session,
  isRunning: false,
  times: DEFAULT_TIMES,
});

function restart(state) {
  if (state.isRunning) {
    clearInterval(interval);
  }
  const audio = document.getElementById('beep');
  audio.pause();
  audio.currentTime = 0;
  return getDefaultState();
}

const handleTimes = (state, type, number) => {
  if (state.isRunning) return { ...state };
  const time = (type === SESSION) ? state.times.session : state.times.break;
  if (time + number <= 0 || time + number > 3600) return { ...state };
  return {
    ...state,
    remaining: (type === state.type) ? time + number : state.remaining,
    times: {
      session: (type === SESSION) ? state.times.session + number : state.times.session,
      break: (type === BREAK) ? state.times.break + number : state.times.break,
    },
  };
};

function timeReducer(state = getDefaultState(), action) {
  switch (action.type) {
    case RESTART:
      return restart(state);
    case TIMER_TICK:
      return decrement(state);
    case TIMER_RUNNING:
      return { ...state, isRunning: true };
    case TIMER_STOP:
      clearInterval(interval);
      return { ...state, isRunning: false };
    case INCREMENT_SESSION:
      return handleTimes(state, SESSION, 60);
    case DECREMENT_SESSION:
      return handleTimes(state, SESSION, -60);
    case INCREMENT_BREAK:
      return handleTimes(state, BREAK, 60);
    case DECREMENT_BREAK:
      return handleTimes(state, BREAK, -60);
    default:
      return state;
  }
}

const restartAction = () => ({
  type: RESTART,
});

const incrementSession = () => ({
  type: INCREMENT_SESSION,
});

const decrementSession = () => ({
  type: DECREMENT_SESSION,
});

const incrementBreak = () => ({
  type: INCREMENT_BREAK,
});

const decrementBreak = () => ({
  type: DECREMENT_BREAK,
});

export {
  timeReducer,
  handlePlay,
  handleStop,
  restartAction,
  incrementSession,
  decrementSession,
  incrementBreak,
  decrementBreak,
};
