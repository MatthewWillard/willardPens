let timeoutId;
let idleCallback = null;
let notIdleEvents = [
  "keypress",
  "mousemove",
  "mousedown",
  "scroll",
  "touchstart"
];
let fiveMinutesInMs = 5 * 60 * 1000;

const IdleService = {
  setIdleCallback(idleCb) {
    idleCallback = idleCb;
  },
  resestIdleTimer(ev) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(idleCallback, fiveMinutesInMs);

  },

  }
};

export default IdleService;