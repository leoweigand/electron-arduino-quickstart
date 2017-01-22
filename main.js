// Johnny-Fife uses stdin, which causes Electron to crash
// this reroutes stdin, so it can be used

var Readable = require("stream").Readable;  
var util = require("util");  
util.inherits(MyStream, Readable);  
function MyStream(opt) {  
  Readable.call(this, opt);
}
MyStream.prototype._read = function() {};  
// hook in our stream
process.__defineGetter__("stdin", function() {  
  if (process.__stdin) return process.__stdin;
  process.__stdin = new MyStream();
  return process.__stdin;
});

var five = require("johnny-five");
var board = new five.Board({
  repl: false // does not work with browser console
});

board.on("ready", function() {
  console.log('%cArduino ready, click button to toggle onboard LED.', 'color: green;');

  // Create a standard `led` component instance
  var led = new five.Led(13);

  // toggle onboard led using button element
  $('button').on('click', function(){
    led.toggle();
  });
});