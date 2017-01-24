# Quickstart for Electron and Arduino
![](https://rawgit.com/leoweigand/electron-arduino-quickstart/master/poster.png)
This repository is a quick-start for using [Arduino](https://www.arduino.cc/) with [Electron](http://electron.atom.io/) and [Johnny-Five](http://johnny-five.io/), which is a great way to get started with hardware prototyping in JavaScript. It is loosely based on the [electron-quickstart](https://github.com/electron/electron-quick-start) repository and follows a [tutorial](http://meow.noopkat.com/using-johnny-five-within-an-electron-app/) by @noopkat.

## Prerequisites
First, you have to install Firmata on your Arduino, which is a protocol for communicating with microcontrollers. In the Arduino IDE, select the `Firmata Plus` sketch from the examples folder and upload it to your board.
Be sure to have [node.js](https://nodejs.org/en/) installed, as well Electron:
```bash
npm install -g electron
```

## How to use
First, hook up your Arduino with Firmata loaded on to it.
Next, clone this repository and install the dependencies:
```bash
git clone https://github.com/leoweigand/electron-arduino-quickstart.git
cd electron-arduino-quickstart
npm install
```
Use `npm start` to run your app and you are ready to go!
  
If you get an error because of missing **xcode-commandline-tools**, install the command-line-tools and execute `npm run postinstall`. After that, you should be able to use npm start as shown before.

## What’s next?
I recommend looking into the documentation of both Johnny-Five and Electron for more information on the topic. If something is not working, feel free to [open a new issue](https://github.com/leoweigand/electron-arduino-quickstart/issues/new).

## Why is this useful?
If you want to program an Arduino using JavaScript, Johnny-Five and node.js are a great way to start. But even for the most basic UI, you have to incorporate some sort of communication between your webpage and node.js. You could use websockets, for example using socket.io but this is really to much boilerplate code for rapid prototyping. Using Electron on the other hand, we are able to i.e. use jQuery and other libraries and directly speak to Arduinos when actions occur in the browser window.
  
Unfortunately, there are some difficulties to overcome using Electron and the `serialport` library required by Johnny-Five which take time and might be confusing for beginners. As outlined in the tutorial by @noopkat, this repo fixes these problems and provides the boilerplate code for getting started with hardware prototyping in Electron.
