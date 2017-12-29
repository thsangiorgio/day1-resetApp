'use strict';

// console.log('App.js is running!');
// var template = <p>This is JSX from app.js!</p>;
// var appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);
var count = 0;
var addOne = function addOne() {
  count++;
  resetApp();
};
var minusOne = function minusOne() {
  count--;
  resetApp();
};
var reset = function reset() {
  count = 0;
  resetApp();
};

var appRoot = document.getElementById('app');
//ReactDOM.render(template, appRoot);

var resetApp = function resetApp() {
  var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'Reset'
    )
  );
  ReactDOM.render(templateThree, appRoot);
};
resetApp();
