import kaplay from "kaplay";

const k = kaplay({
  width: 1920,
  height: 1080,
  letterbox: true,
  background: [0, 0, 0],
  global: false,
  buttons: {
    moveLeft: {
      keyboard: ["a", "left"],
    },

    moveRight: {
      keyboard: ["d", "right"],
    },
    
    fire: {
        keyboard: ["space"],
        mouse: "left",
    }
  },
  touchToMouse: true,
  debug: true,
  debugKey: "`",
});

export default k;