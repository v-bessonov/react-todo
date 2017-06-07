var React = require('react');
var ReactDOM = require('react-dom');
//var {Route, Router, IndexRoute} = require('react-router');
var TodoApp = require('TodoApp');



//Load foundation-sites

//require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

//App css
//require('style-loader!css-loader!sass-loader!applicationStyles');
require('applicationStyles');

// var objOne = {
//   name : 'Andrew',
//   location: 'Moscow'
// };
//
// var objTwo = {
//   age: 25,
//   ...objOne
// };
//console.log(objTwo);

ReactDOM.render(
<TodoApp/>,


  document.getElementById('app')
);
