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


  }
};

export default IdleService;